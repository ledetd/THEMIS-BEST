from rest_framework.viewsets import ModelViewSet
from ..models import Operation, ProjectManager, Project, Well, DailyReport, Crew, PRA
from .serializers import OperationSerializer, ProjectManagerSerializer, ProjectSerializer, WellSerializer, DailyReportSerializer, CrewSerializer, PraSerializer

class OperationViewSet(ModelViewSet):
    queryset = Operation.objects.all()
    serializer_class = OperationSerializer

class ProjectManagerViewSet(ModelViewSet):
    queryset = ProjectManager.objects.all()
    serializer_class = ProjectManagerSerializer

class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class WellViewSet(ModelViewSet):
    queryset = Well.objects.all()
    serializer_class = WellSerializer

class DailyReportViewSet(ModelViewSet):
    queryset = DailyReport.objects.all()
    serializer_class = DailyReportSerializer

class CrewViewSet(ModelViewSet):
    queryset = Crew.objects.all()
    serializer_class = CrewSerializer

class PraViewSet(ModelViewSet):
    queryset = PRA.objects.all()
    serializer_class = PraSerializer