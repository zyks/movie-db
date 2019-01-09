from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):

    USERNAME = "testuser"
    PASSWORD = "user1234"

    def handle(self, *args, **kwargs):
        if not User.objects.filter(username=self.USERNAME).exists():
            user = User(username=self.USERNAME)
            user.set_password(self.PASSWORD)
            user.save()
            print("User has been created!")
        else:
            print("User already exists.")
