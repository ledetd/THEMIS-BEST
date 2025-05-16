from django.contrib import admin
from .models import Operation, Project, Well, Crew, PRA

admin.site.register(Operation)
admin.site.register(Project)
admin.site.register(Well)
admin.site.register(Crew)

admin.site.register(PRA)
