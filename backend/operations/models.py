from django.db import models

class Operation(models.Model):
    operation_name = models.CharField(max_length=100)
    operation_location = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.operation_name} {self.operation_location}'


class Project(models.Model):
    project_name = models.CharField(unique=True, max_length=100)
    project_location = models.CharField(max_length=100)
    project_customer = models.CharField(max_length=100)
    project_manager = models.CharField(max_length=100)
    date_created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.project_name
    
class Well(models.Model):
    project_name = models.ForeignKey(Project, on_delete=models.SET_NULL, null=True, blank=True)
    well_name = models.CharField(unique=True, max_length=100)
    
    def __str__(self):
        return self.well_name
    
class Crew(models.Model):
    crew_first_name = models.CharField(max_length=100)
    crew_last_name = models.CharField(max_length=100)
    crew_position = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.crew_first_name} {self.crew_last_name}'
    
class PRA(models.Model):
    project_name = models.ForeignKey(Project, on_delete=models.CASCADE)
    task_name = models.CharField(max_length=100)

    def __str__(self):
        return self.project_name