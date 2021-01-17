import os
import json
import base64
import numpy as np
import cv2

region = os.environ['AWS_REGION']
s3_bucket_name = os.environ['S3_BUCKET_NAME']

def lambda_function(event, context):
    try:
        body = json.loads(event["body"])
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

        return json.dumps({
                'edges': [0, 1],
                'minThreshold': minThreshold,
                'maxThreshold': maxThreshold,
                'useL2Gradient': useL2Gradient,
                'useRigidLines': useRigidLines,
                'numpy': [0, 2],
                'url': url,
                'height': height,
                'width': width
            })
    except Exception as e:
        return {
            'statusCode': 500,
            'message': json.dumps(e)
        }