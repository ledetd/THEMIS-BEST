from rest_framework.viewsets import ModelViewSet
from ..models import Operation
from .serializers import OperationSerializer

class OperationViewSet(ModelViewSet):
    queryset = Operation.objects.all()
    serializer_class = OperationSerializer
