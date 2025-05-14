from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import OperationViewSet, ProjectViewSet

operation_router = DefaultRouter()
project_router = DefaultRouter()

operation_router.register(r'operations', OperationViewSet)
project_router.register(r'projects', ProjectViewSet)
