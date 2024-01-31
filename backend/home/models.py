from django.db import models
from django.urls import reverse

# Create your models here.
class signup(models.Model):
    fname=models.CharField(max_length=1000)
    lname=models.CharField(max_length=1000)
    email=models.CharField(max_length=1000)
    password=models.CharField(max_length=1000)

    def get_absolute_url(self):
        return reverse('signup',kwargs={'pk':self.pk})
