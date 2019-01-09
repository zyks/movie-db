#!/bin/bash


echo "----> Migrating..."
python /code/manage.py migrate

echo "----> Check ongoing..."
python /code/manage.py check


echo "----> Create initial testuser"
python /code/manage.py create_user


echo "----> Starting application..."
python /code/manage.py runserver 0.0.0.0:8000
