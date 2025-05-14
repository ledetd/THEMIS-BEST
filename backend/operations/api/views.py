from rest_framework.viewsets import ModelViewSet
from ..models import Operation, Project
from .serializers import OperationSerializer, ProjectSerializer

class OperationViewSet(ModelViewSet):
    queryset = Operation.objects.all()
    serializer_class = OperationSerializer

class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
