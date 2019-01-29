"""gcns URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
	url(r'^$', 'gcns.views.home', name='home'),
	url(r'^skpgeo/$', 'gcns.views.skpgeo'),
    url(r'^pay/(?P<pid>[^/]*)/$', 'gcns.views.payment'),
    url(r'^success/$', 'gcns.views.success'),
    url(r'^destroyed/$', 'gcns.views.destroyed'),
	url(r'^utm/$', 'gcns.views.utm'),
	url(r'^cassini/$', 'gcns.views.cassini'),
    url(r'^admin/', include(admin.site.urls)),
]
