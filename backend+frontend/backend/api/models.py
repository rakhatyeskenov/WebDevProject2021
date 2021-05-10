from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=30, default='category')

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Product(models.Model):
    name = models.CharField(max_length=30, default='company')
    description = models.CharField(max_length=30, default='', blank=True)
    image = models.CharField(max_length=75)
    price = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, default=1)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'image': self.image,
            'price': self.price
        }


class Cart(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, default=1)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, default=1)


class Favorite(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, default=1)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, default=1)



