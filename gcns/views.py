from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse, JsonResponse


def home(request):
	return render_to_response('app.html')

"""
def geodetic(request):
	return render_to_response('geodetic.html')


def reference(request):
	return render_to_response('reference.html')
"""