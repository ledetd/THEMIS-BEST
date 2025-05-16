from rest_framework.serializers import ModelSerializer
from ..models import Operation, Project, Well, Crew, PRA

class OperationSerializer(ModelSerializer):
    class Meta:
        model = Operation
        fields = ('operation_name', 'operation_location')

class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ('project_name', 'project_location', 'project_customer', 'project_manager', 'date_created')

class WellSerializer(ModelSerializer):
    class Meta:
        model = Well
        fields = ('well_name',)

class CrewSerializer(ModelSerializer):
    class Meta:
        model = Crew
        fields = ('crew_first_name', 'crew_last_name', 'crew_position')

class PraSerializer(ModelSerializer):
    class Meta:
        model = PRA
        fields = ('project_name', 'task_name')