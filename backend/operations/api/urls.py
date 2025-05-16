from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import OperationViewSet, ProjectViewSet, WellViewSet, CrewViewSet, PraViewSet

operation_router = DefaultRouter()
project_router = DefaultRouter()
well_router = DefaultRouter()
crew_router = DefaultRouter()
pra_router = DefaultRouter()

operation_router.register(r'operations', OperationViewSet)
project_router.register(r'projects', ProjectViewSet)
well_router.register(r'wells', WellViewSet)
crew_router.register(r'crews', CrewViewSet)
pra_router.register(r'pras', PraViewSet)
