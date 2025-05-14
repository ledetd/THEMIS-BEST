from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import OperationViewSet

operation_router = DefaultRouter()
operation_router.register(r'operations', OperationViewSet)