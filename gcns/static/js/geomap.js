    var map;
    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        osm = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib });
        
        

    var satellite = L.tileLayer('http://www.google.com/maps/vt?lyrs=s,h&x={x}&y={y}&z={z}', {
        //http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}
            attribution: 'google'
        });

    var basemaps = {
      "Satellite": satellite,
      "Streetmap": osm
    };


    var all_countries = L.tileLayer.wms('http://45.79.11.62:8080/geoserver/wms', {
              layers: 'gcns:african_countries',
              transparent: true,
              format: 'image/png'
          }); 

    var alltowns = L.tileLayer.wms('http://45.79.11.62:8080/geoserver/wms', {
              layers: 'gcns:alltowns',
              transparent: true,
              format: 'image/png'
          }); 

    var counties = L.tileLayer.wms('http://45.79.11.62:8080/geoserver/wms', {
              layers: 'gcns:counties',
              transparent: true,
              format: 'image/png'
          }); 

    var lakes = L.tileLayer.wms('http://45.79.11.62:8080/geoserver/wms', {
              layers: 'gcns:waterbodies',
              transparent: true,
              format: 'image/png'
          }); 

    var rivers = L.tileLayer.wms('http://45.79.11.62:8080/geoserver/wms', {
              layers: ' gcns:rivers',
              transparent: true,
              format: 'image/png'
          }); 

    var skpgeo = L.tileLayer.wms('http://45.79.11.62:8080/geoserver/wms', {
              layers: 'gcns:skpgeo',
              transparent: true,
              format: 'image/png'
          }); 

    var skpgeoa = L.tileLayer.wms('http://45.79.11.62:8080/geoserver/wms', {
              layers: 'gcns:skpgeoa',
              transparent: true,
              format: 'image/png'
          }); 

    var skpgeob = L.tileLayer.wms('http://45.79.11.62:8080/geoserver/wms', {
              layers: 'gcns:skpgeob',
              transparent: true,
              format: 'image/png'
          }); 

    var skpgeoc = L.tileLayer.wms('http://45.79.11.62:8080/geoserver/wms', {
              layers: 'gcns:skpgeoc',
              transparent: true,
              format: 'image/png'
          }); 


    var slu = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
              layers: 'gcns:slu_20181011154216036839',
              transparent: true,
              format: 'image/png'
          }); 

    //var overlays = L.layerGroup([all_countries, alltowns, counties, skpgeo, skpgeoa, skpgeob, skpgeoc]);
    var overlays = {
      "Africa": all_countries,
      "Counties": counties,
      "Towns": alltowns,
      "Water Bodies": lakes,
      "Rivers": rivers,
      "SKPGEO": skpgeo,
      "SKPGEO A": skpgeoa,
      "SKPGEO B": skpgeob,
      "SKPGEO C": skpgeoc

    };

    map = new L.Map('map', { 
      center: new L.LatLng(-0.1443972, 40.274636), 
      zoom: 7, 
      layers: [osm, all_countries, slu] 
    });


    L.control.layers(basemaps, overlays, {collapsed: false}).addTo(map);

    /*
    L.control.layers({
        'Terrain': osm.addTo(map)
            }, { position: 'bottomright', collapsed: false }//, { 'AOI': drawnItems },
            ).addTo(map);*/

   

   


            

        
