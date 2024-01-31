from home import views
from django.urls import path
from home.views import menu
from home.views import about
from home.views import menulist
from home.views import cart
from home.views import contact
from home.views import signup
from home.views import usersread
from home.views import createuser
from home.views import usersview
urlpatterns = [

path('',menu.as_view()),
path('about/',about.as_view()),
path('menu/',menulist.as_view()),
path('menu/cart/',cart.as_view()),
path('contact/',contact.as_view()),
path('contact/menu/',menulist.as_view()),
path('menu/home/',menu.as_view()),
path('home/menu/',menulist.as_view()),
path('signup/',signup.as_view()),
path('usersread/',usersread.as_view()),
path('createuser/',createuser.as_view()),
path('userlist/',usersview),



]
