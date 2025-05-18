
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from ..models import Operation, Project, Well, Crew, ProjectManager, DailyReport, PRA

class OperationSerializer(ModelSerializer):
    class Meta:
        model = Operation
        fields = ('operation_name', 'operation_location')

class ProjectManagerSerializer(ModelSerializer):
    class Meta:
        model = ProjectManager
        fields = ('first_name', 'last_name')

class ProjectSerializer(ModelSerializer):
    project_manager = SerializerMethodField()

    def get_project_manager(self, obj):
        return f'{obj.project_manager.first_name} {obj.project_manager.last_name}'
    
    class Meta:
        model = Project
        fields = ('project_name', 'project_location', 'project_customer', 'project_manager', 'date_created')

class WellSerializer(ModelSerializer):
    project_name = SerializerMethodField()

    def get_project_name(self, obj):
        return obj.project_name.project_name
    
    class Meta:
        model = Well
        fields = ('project_name', 'well_name')

class DailyReportSerializer(ModelSerializer):
    project_name = SerializerMethodField()
    well_name = SerializerMethodField()

    def get_project_name(self, obj):
        return obj.project_name.project_name
    
    def get_well_name(self, obj):
        return obj.well_name.well_name
    
    class Meta:
        model = DailyReport
        fields = ('__all__')

class CrewSerializer(ModelSerializer):
    class Meta:
        model = Crew
        fields = ('crew_first_name', 'crew_last_name', 'crew_position')

class PraSerializer(ModelSerializer):
    class Meta:
        model = PRA
        fields = ('project_name', 'task_name')