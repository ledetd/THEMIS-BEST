from django.db import models

class Operation(models.Model):
    operation_name = models.CharField(max_length=100)
    operation_location = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.operation_name} {self.operation_location}'

class ProjectManager(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
    
class Position(models.Model):
    position_name = models.CharField(max_length=100)

    def __str__(self):
        return self.position_name
    
class Crew(models.Model):
    crew_first_name = models.CharField(max_length=100)
    crew_last_name = models.CharField(max_length=100)
    crew_position = models.ForeignKey(Position, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f'{self.crew_first_name} {self.crew_last_name}'

class Project(models.Model):
    project_name = models.CharField(unique=True, max_length=100)
    project_location = models.CharField(max_length=100)
    project_customer = models.CharField(max_length=100)
    project_manager = models.ForeignKey(ProjectManager, on_delete=models.SET_NULL, null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.project_name
    
class Well(models.Model):
    project_name = models.ForeignKey(Project, on_delete=models.SET_NULL, null=True, blank=True)
    well_name = models.CharField(unique=True, max_length=100)
    current_status = models.TextField(max_length=10000, null=True, blank=True)
    date_updated = models.DateField(auto_now=True)
    
    def __str__(self):
        return self.well_name
    

    

    
class DailyReport(models.Model):
    project_name = models.ForeignKey(Project, on_delete=models.SET_NULL, null=True, blank=True)
    well_name = models.ForeignKey(Well, on_delete=models.SET_NULL, null=True, blank=True)
    current_status = models.CharField(max_length=1000)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.well_name} - {self.current_status}'
        
class PRA(models.Model):
    project_name = models.ForeignKey(Project, on_delete=models.CASCADE)
    task_name = models.CharField(max_length=100)

    def __str__(self):
        return self.project_name