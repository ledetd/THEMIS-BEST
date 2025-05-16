from rest_framework.viewsets import ModelViewSet
from ..models import Operation, Project, Well, Crew
from .serializers import OperationSerializer, ProjectSerializer, WellSerializer, CrewSerializer

class OperationViewSet(ModelViewSet):
    queryset = Operation.objects.all()
    serializer_class = OperationSerializer

class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class WellViewSet(ModelViewSet):
    queryset = Well.objects.all()
    serializer_class = WellSerializer

class CrewViewSet(ModelViewSet):
    queryset = Crew.objects.all()
    serializer_class = CrewSerializer