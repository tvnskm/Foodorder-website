from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View
from home.models import signup
from django.views.generic import ListView
from django.views.generic import CreateView

# Create your views here.

class menu(View):
    def get(self,request):
        return render(request,"home/1pm.html")

class about(View):
    def get(self,request):
        return render(request,"home/Aboutus.html")

class menulist(View):
    def get(self,request):
        return render(request,"home/menu.html")

class cart(View):
    def get(self,request):
        return render(request,"home/cart.html")

class contact(View):
    def get(self,request):
        return render(request,"home/ContactUs.html")

class signup(View):
    def get(self,request):
        return render(request,"home/signUp.html")

class usersread(ListView):
    model = signup

class createuser(CreateView):
    model=signup
    fields=('fname','lname','email','password')

def usersview(request):
    res= signup.objects.all();
    users={'allusers':res};
    return render(request,"home/userReport.html",users);
