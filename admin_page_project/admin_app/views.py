# Create your views here.
from django.shortcuts import render, redirect
from .models import Student, Notice

# Home Page
def home(request):
    students = Student.objects.all()
    return render(request, 'home.html', {'students': students})

# Add Student
def add_student(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        roll_number = request.POST['roll_number']
        Student.objects.create(name=name, email=email, roll_number=roll_number)
        return redirect('home')
    return render(request, 'add_student.html')

# Delete Student
def delete_student(request, student_id):
    student = Student.objects.get(id=student_id)
    student.delete()
    return redirect('home')

# View Notices
def view_notices(request):
    notices = Notice.objects.all()
    return render(request, 'view_notices.html', {'notices': notices})

# Add Notice
def add_notice(request):
    if request.method == 'POST':
        title = request.POST['title']
        content = request.POST['content']
        Notice.objects.create(title=title, content=content)
        return redirect('view_notices')
    return render(request, 'add_notices.html')
