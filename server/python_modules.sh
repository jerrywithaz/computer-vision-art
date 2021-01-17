cd ./python_modules
echo "Downloading numpy wheel..."
curl  --output ./numpy-1.19.5-cp36-cp36m-manylinux2010_x86_64.whl https://files.pythonhosted.org/packages/14/32/d3fa649ad7ec0b82737b92fefd3c4dd376b0bb23730715124569f38f3a08/numpy-1.19.5-cp36-cp36m-manylinux2010_x86_64.whl
echo "Unzipping numpy wheel..."
unzip -o numpy-1.19.5-cp36-cp36m-manylinux2010_x86_64.whl
rm -f numpy-1.19.5-cp36-cp36m-manylinux2010_x86_64.whl
echo "Successfully created numpy packages..."