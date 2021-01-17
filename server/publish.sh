echo "Deleting previous deployment.zip..."
rm deployment.zip

echo "Adding python modules to zip..."
cd python_modules
zip -r ../deployment.zip ./

echo "Adding python lambda to zip..."
cd ../
zip -g deployment.zip calculate_canny_edges.py 

echo "Uploading deployment to S3..."
aws s3 cp ./deployment.zip s3://image-art --profile jerrywithaz

echo "Updating lamdba on AWS..."
aws lambda update-function-code --function-name CalculateCannyEdges --s3-bucket image-art --s3-key deployment.zip --profile jerrywithaz