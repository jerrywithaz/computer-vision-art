import os
import json
import base64
import numpy as np
import cv2
import boto3
from uuid import uuid4

s3_client = boto3.resource('s3')
region = os.environ['AWS_REGION']
s3_bucket_name = os.environ['S3_BUCKET_NAME']

class Encoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return json.JSONEncoder.default(self, obj)

def lambda_function(event, context):
    # Parse body JSON
    body = json.loads(event["body"])

    # Extract arguments from body and/or use default values
    url = body['url']
    minThreshold = int(body.get("minThreshold", 0))
    maxThreshold = int(body.get("maxThreshold", 0))
    useL2Gradient = bool(body.get("useL2Gradient", False))
    useRigidLines = bool(body.get("useRigidLines", False))

    # Decode data url
    uri_buffer = base64.b64decode(url.split(',')[1])
    # Create np array from buffer
    nparr = np.frombuffer(uri_buffer, dtype=np.uint8)
    # Decode np array into opencv matrix
    img = cv2.imdecode(nparr, cv2.IMREAD_GRAYSCALE)
    # Get dimensions
    height, width = img.shape
    # Find edges in image 
    edges = cv2.Canny(img, minThreshold, maxThreshold, L2gradient=useL2Gradient)
    # Find contours in image
    contours = cv2.findContours(edges, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
    # Cache length of retrieved contours
    number_of_contours = len(contours)
    # Initialize zeroed numpy array 
    points = np.empty((number_of_contours), dtype=object)

    # Iterate through contours 
    for i, contour in enumerate(contours, start=0):
        if useRigidLines == True:
            epsilon = 3
            polygon = cv2.approxPolyDP(contour, epsilon, False)
            points[i] = polygon.flatten().tolist()
        else:
            points[i] = contour

    # Convert points ndarray to a python list
    points_list = points.tolist()
    # Generate unique file name for the json
    file_name = str(uuid4()) + '.json'
    # Create s3 object with filename
    s3object = s3_client.Object(s3_bucket_name, file_name)
    # Create JSON file and put to s3
    s3object.put(
        Body=(bytes(json.dumps({
            'points': points_list
        }, cls=Encoder).encode('UTF-8')))
    )

    return json.dumps({
            'width': width,
            'height': height,
            'points': file_name
        }, cls=Encoder)