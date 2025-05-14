from rest_framework.serializers import ModelSerializer
from ..models import Operation, Project

class OperationSerializer(ModelSerializer):
    class Meta:
        model = Operation
        fields = ('operation_name', 'operation_location')

class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ('project_name', 'date_created')