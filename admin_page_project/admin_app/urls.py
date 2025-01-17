from django.contrib import admin
from django.urls import path
from . import views

app_name = 'app_name'
urlpatterns = [
    path('', views.home, name='home'),
    path('add-student/', views.add_student, name='add_student'),
    path('delete-student/<int:student_id>/', views.delete_student, name='delete_student'),
    path('view-notices/', views.view_notices, name='view_notices'),
    path('add-notice/', views.add_notices, name='add_notice'),
]