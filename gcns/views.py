from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse, JsonResponse
from django.db import connection

import json


def home(request):
	return render_to_response('app.html')


def payment(request, pid):
    context_dict = {
        'skp_label': pid
    }
    return render_to_response('payment.html', RequestContext(request, context_dict))

def success(request):
    return render_to_response('success.html')

def skpgeo(request):
    # return skpgeo as json
    skpgeo1 = []
    skpgeoa = []
    skpgeob = []
    skpgeoc = []
    destroyed1 = []
    destroyed2 = []
    destroyed3 = []
    destroyed4 = []


    cur = connection.cursor()

    # skpgeo
    cur.execute("""SELECT point, descrip, elevatio_1, ST_X(geom), ST_Y(geom) FROM skpgeo""")
    for row in cur.fetchall():
        skpgeo1.append([row[0], row[1], row[2], row[3], row[4] ])

    # skpgeo a
    cur.execute("""SELECT point, descrip, elevation, ST_X(geom), ST_Y(geom) FROM skpgeoa""")
    for row in cur.fetchall():
        skpgeoa.append([row[0], row[1], row[2], row[3], row[4] ])

    # skpgeo b
    cur.execute("""SELECT point, descrip, elevation, ST_X(geom), ST_Y(geom) FROM skpgeob""")
    for row in cur.fetchall():
        skpgeob.append([row[0], row[1], row[2], row[3], row[4] ])

    # skpgeo c
    cur.execute("""SELECT point, descrip, elevation, ST_X(geom), ST_Y(geom) FROM skpgeoc""")
    for row in cur.fetchall():
        skpgeoc.append([row[0], row[1], row[2], row[3], row[4] ])

    # destroyed 1
    cur.execute("""SELECT point, heights_1, ST_X(geom), ST_Y(geom) FROM destroyed1""")
    for row in cur.fetchall():
        destroyed1.append([row[0], row[1], row[2], row[3] ])

    # destroyed 2
    cur.execute("""SELECT point, descriptio, ST_X(geom), ST_Y(geom) FROM destroyed2""")
    for row in cur.fetchall():
        destroyed2.append([row[0], row[1], row[2], row[3] ])

    # destroyed 3
    cur.execute("""SELECT point, descriptio, ST_X(geom), ST_Y(geom) FROM destroyed3""")
    for row in cur.fetchall():
        destroyed3.append([row[0], row[1], row[2], row[3] ])


    # destroyed 4
    cur.execute("""SELECT point, descriptio, ST_X(geom), ST_Y(geom) FROM destroyed4""")
    for row in cur.fetchall():
        destroyed4.append([row[0], row[1], row[2], row[3] ])


    points_json = {
        'skpgeo': skpgeo1,
        'skpgeoa': skpgeoa,
        'skpgeob': skpgeob,
        'skpgeoc': skpgeoc,
        'destroyed1': destroyed1,
        'destroyed2': destroyed2,
        'destroyed3': destroyed3,
        'destroyed4': destroyed4

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