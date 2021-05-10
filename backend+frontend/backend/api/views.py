from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from django.views import View
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from api.models import Category, Product, Cart, Favorite
from api.serializers import CategorySerializer, ProductSerializer, CartSerializer, FavoriteSerializer

# class based views
# from backend-resolution.api.models import Category, Product, Cart, Favorite
# from backend-resolution.api.serializers import CategorySerializer, ProductSerializer, CartSerializer, FavoriteSerializer


class CategoryView(APIView):
    # permission_classes = (IsAuthenticated, )

    def get(self, request):
        category = Category.objects.all()
        serializer = CategorySerializer(category, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class ProductView(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class ProductByCategoryView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, pk):
        products = Product.objects.filter(category=pk)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductDetailView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, pk):
        product = Product.objects.get(id=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)


# function based views
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def cart_list(request):
    if request.method == 'GET':
        cart_list = Cart.objects.all()
        serializer = CartSerializer(cart_list, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def cart_detail(request, pk):
    try:
        cart_item = Cart.objects.get(id=pk)
    except Cart.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = CartSerializer(cart_item)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = CartSerializer(instance=cart_item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    if request.method == 'DELETE':
        cart_item.delete()
        return Response({'deleted': True})

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def favorite_list(request):
    if request.method == 'GET':
        favorite_list = Favorite.objects.all()
        serializer = FavoriteSerializer(favorite_list, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = FavoriteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def favorite_detail(request, pk):
    try:
        favorite_item = Favorite.objects.get(id=pk)
    except Cart.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = CartSerializer(favorite_item)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = FavoriteSerializer(instance=favorite_item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    if request.method == 'DELETE':
        favorite_item.delete()
        return Response({'deleted': True})


# @api_view(['POST', 'PUT', 'DELETE'])
# @permission_classes([IsAuthenticated])
# def Comment(request, pk):
#     try:
#         comment_item = Comment.objects.get(id=pk)
#     except Comment.DoesNotExist as e:
#         return Response({'error': str(e)})
#
#     if request.method == 'POST':
#         serializer = CommentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors)
#
#     if request.method == 'PUT':
#         serializer = FavoriteSerializer(instance=comment_item, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors)
#
#     if request.method == 'DELETE':
#         comment_item.delete()
#         return Response({'deleted': True})



