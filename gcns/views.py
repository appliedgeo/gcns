from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse, JsonResponse
from django.db import connection

import json
import numpy as np


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

    utm_e = utm_data['utm_e']
    utm_n = utm_data['utm_n']

    utm_x1 = utm_data['utm_x1']
    utm_y1 = utm_data['utm_y1']

    utm_x2 = utm_data['utm_x2']
    utm_y2 = utm_data['utm_y2']

    utm_x3 = utm_data['utm_x3']
    utm_y3 = utm_data['utm_y3']

    utm_x4 = utm_data['utm_x4']
    utm_y4 = utm_data['utm_y4']

    cassini_x1 = utm_data['cassini_x1']
    cassini_y1 = utm_data['cassini_y1']

    cassini_x2 = utm_data['cassini_x2']
    cassini_y2 = utm_data['cassini_y2']

    cassini_x3 = utm_data['cassini_x3']
    cassini_y3 = utm_data['cassini_y3']

    cassini_x4 = utm_data['cassini_x4']
    cassini_y4 = utm_data['cassini_y4']

    # matrices
    A = np.array([
        [utm_x1, -utm_y1, 1, 0],
        [utm_y1, utm_x1, 0, 1],
        [utm_x2, -utm_y2, 1, 0],
        [utm_y2, utm_x2, 0, 1],
        [utm_x3, -utm_y3, 1, 0],
        [utm_y3, utm_x3, 0, 1],
        [utm_x4, -utm_y4, 1, 0],
        [utm_y4, utm_x4, 0, 1]


        ])

    B = np.array([
        [cassini_x1],
        [cassini_y1],
        [cassini_x2],
        [cassini_y2],
        [cassini_x3],
        [cassini_y3],
        [cassini_x4],
        [cassini_y4],

        ])


    # matrix computation
    Atrans = A.transpose()

    C = Atrans.dot(A)

    D = np.linalg.inv(C)

    E = Atrans.dot(B)

    F = D.dot(E)

    a = F[0,0]
    b = F[1,0]
    Tx = F[2,0]
    Ty = F[3,0]

    easting = a*utm_e - b*utm_n + Tx
    northing = b*utm_e + a*utm_n + Ty



    cassini_results = {
        'easting': easting,
        'northing': northing

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