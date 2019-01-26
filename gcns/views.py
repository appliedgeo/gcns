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

    cur.execute("""SELECT point, descrip, elevatio_1, xcoord, ycoord FROM skpgeo""")
    points = []
    for row in cur.fetchall():
        points.append([row[0], row[1], row[2], row[3], row[4] ])

    points_json = {
        'points': points
    }

    cur.close()

    return JsonResponse(points_json)

def destroyed(request):
    # return destroyed as json
    cur = connection.cursor()

    cur.execute("""SELECT point, descrip, elevatio_1, xcoord, ycoord FROM destroyed1""")
    points = []
    for row in cur.fetchall():
        points.append([row[0], row[1], row[2], row[3], row[4] ])

    points_json = {
        'points': points
    }

    cur.close()

    return JsonResponse(points_json)


def utm(request):
    # run utm to cassini conversion
    utm_data = json.loads(request.body)

    cassini_results = {

    }

    return JsonResponse(cassini_results)


def cassini(request):
    # run cassini to utm conversion
    cassini_data = json.loads(request.body)

    utm_results = {

    }

    return JsonResponse(utm_results)

"""
def geodetic(request):
	return render_to_response('geodetic.html')


def reference(request):
	return render_to_response('reference.html')
"""