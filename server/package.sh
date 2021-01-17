#!/bin/bash
mkdir temp
python3 -m pip install $1 --no-deps -t temp/python/lib/python3.6/site-packages/
rm -f /package/$1.zip

cd temp
zip -r /package/$1.zip python