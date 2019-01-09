#!/bin/bash


echo "----> Migrating..."
python /code/manage.py migrate

echo "----> Check ongoing..."
python /code/manage.py check

echo "----> Starting application..."
python /code/manage.py runserver 0.0.0.0:8000
