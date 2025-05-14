from rest_framework.routers import DefaultRouter
from operations.api.urls import operation_router
from django.urls import path, include

router = DefaultRouter()

router.registry.extend(operation_router.registry)

urlpatterns = [
    path('', include(router.urls))
]