from django.contrib import admin
from .models import Operation, Project, Well, Crew, PRA, ProjectManager, DailyReport, Position

admin.site.register(Operation)
admin.site.register(Project)
admin.site.register(Well)
admin.site.register(Crew)
admin.site.register(ProjectManager)
admin.site.register(DailyReport)
admin.site.register(Position)

admin.site.register(PRA)
