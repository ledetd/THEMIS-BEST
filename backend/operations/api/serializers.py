from rest_framework.serializers import ModelSerializer
from ..models import Operation

class OperationSerializer(ModelSerializer):
    class Meta:
        model = Operation
        fields = ('operation_name', 'operation_location')

