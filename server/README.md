# Server

## Build Docker

`docker build -t lambda-zipper .`

## Build OpenCV for AWS Lambda

`docker run --rm -v $(pwd):/package lambda-zipper opencv-python`
