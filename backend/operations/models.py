from django.db import models

class Operation(models.Model):
    operation_name = models.CharField(max_length=100)
    operation_location = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.operation_name} {self.operation_location}'
    
class Project(models.Model):
    project_name = models.CharField(max_length=100)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.project_name