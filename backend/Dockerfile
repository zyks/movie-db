FROM python:3.6


COPY requirements /code/requirements
RUN pip install -r /code/requirements/base.txt

COPY config/local.sample.env /code/config/local.env
COPY . /code


EXPOSE 8000
CMD /code/run.sh
