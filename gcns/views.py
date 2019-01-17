from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse, JsonResponse
from django.db import connection

import json


def home(request):
	return render_to_response('app.html')


def skpgeo(request):
    # return skpgeo as json
    cur = connection.cursor()

    cur.execute("""SELECT descrip, elevatio_1, xcoord, ycoord FROM skpgeo""")
    points = []
    for row in cur.fetchall():
        points.append([row[0], row[1], row[2], row[3] ])

    points_json = {
        'points': points
    }

    cur.close()

    return JsonResponse(points_json)

"""
def geodetic(request):
	return render_to_response('geodetic.html')


def reference(request):
	return render_to_response('reference.html')
"""