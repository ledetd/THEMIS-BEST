from rest_framework.viewsets import ModelViewSet
from ..models import Operation, Project, Well, Crew, PRA
from .serializers import OperationSerializer, ProjectSerializer, WellSerializer, CrewSerializer, PraSerializer

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

class PraViewSet(ModelViewSet):
    queryset = PRA.objects.all()
    serializer_class = PraSerializer