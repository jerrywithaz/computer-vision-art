#!/bin/bash
echo "Installing package..."
mkdir temp
python3 -m pip install $1 -t temp
rm -f /package/$1.zip

echo "Installing zipping..."
cd temp
zip -r /package/$1.zip *

rm -r temp

echo "Success!"