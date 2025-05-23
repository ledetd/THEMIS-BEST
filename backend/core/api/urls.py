from rest_framework.routers import DefaultRouter
from operations.api.urls import operation_router, project_manager_router, project_router, well_router, daily_report_router, crew_router, pra_router
from django.urls import path, include

router = DefaultRouter()

router.registry.extend(operation_router.registry)
router.registry.extend(project_manager_router.registry)
router.registry.extend(project_router.registry)
router.registry.extend(well_router.registry)
router.registry.extend(daily_report_router.registry)
router.registry.extend(crew_router.registry)
router.registry.extend(pra_router.registry)

urlpatterns = [
    path('', include(router.urls))
]