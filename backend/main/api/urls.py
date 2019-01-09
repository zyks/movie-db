from django.conf.urls import include, url
from rest_framework import routers
# from .views import *


router = routers.DefaultRouter()


urlpatterns = [
    url(r'^', include(router.urls)),
]
