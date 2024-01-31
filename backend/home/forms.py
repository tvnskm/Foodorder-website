from django import forms
from home.models import signup

class signupModelForm(forms.ModelForm):
    class Meta:
        model = signup
        fields = '__all__'
