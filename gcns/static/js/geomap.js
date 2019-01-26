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

    var skp_points = L.layerGroup();

          // load skp markers
    $.ajax({
          type: "GET",
          contentType: "application/json",
          url: '/skpgeo/',
          //async: false,
          dataType: "json",
          success: function(data){

             var points = data.points;

             $.each(points, function (i, point){
                  var pid = point[0];
                  var label = point[1];
                  var height = point[2];
                  var lon = parseFloat(point[3]);
                  var lat = parseFloat(point[4]);

                  var content = '<b>DESCRIPTION:</b> ' + label + '<br>' + 
                                '<b>ELEVATION:</b> ' + height + '<br>' + 
                                '<a target="_blank" href="/pay/' + pid + '">PAY NOW</a><br>' + 
                                '<img src="/static/photos/'+label+'.jpg" height="120" width="140">';
                  

                  var skpmarker = L.marker([lat, lon]).bindPopup(content);

                  skpmarker.addTo(skp_points);

              });




         }
    });
    


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

    /*
    var skpgeo = L.tileLayer.wms('http://45.79.11.62:8080/geoserver/wms', {
              layers: 'gcns:skpgeo',
              transparent: true,
              format: 'image/png'
          }); 
    */

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
    /*
    var destroyed1 = L.tileLayer.wms('http://45.79.11.62:8080/geoserver/wms', {
              layers: 'gcns:destroyed1',
              transparent: true,
              format: 'image/png'
          }); 

    var destroyed2 = L.tileLayer.wms('http://45.79.11.62:8080/geoserver/wms', {
              layers: 'gcns:destroyed2',
              transparent: true,
              format: 'image/png'
          }); 

    var destroyed3 = L.tileLayer.wms('http://45.79.11.62:8080/geoserver/wms', {
              layers: 'gcns:destroyed3',
              transparent: true,
              format: 'image/png'
          }); 

    var destroyed4 = L.tileLayer.wms('http://45.79.11.62:8080/geoserver/wms', {
              layers: 'gcns:destroyed4',
              transparent: true,
              format: 'image/png'
          }); 
  */

   

    //var overlays = L.layerGroup([all_countries, alltowns, counties, skpgeo, skpgeoa, skpgeob, skpgeoc]);
    var overlays = {
      "Africa": all_countries,
      "Counties": counties,
      "Towns": alltowns,
      "Water Bodies": lakes,
      "Rivers": rivers,
      "SKPGEO": skp_points,
      "SKPGEO A": skpgeoa,
      "SKPGEO B": skpgeob,
      "SKPGEO C": skpgeoc
      /*"DESTROYED 1": destroyed1,
      "DESTROYED 2": destroyed2,
      "DESTROYED 3": destroyed3,
      "DESTROYED 4": destroyed4*/
      

    };

    map = new L.Map('map', { 
      center: new L.LatLng(-0.1443972, 40.274636), 
      zoom: 7, 
      layers: [osm, all_countries] 
    });


    L.control.layers(basemaps, overlays, {collapsed: false}).addTo(map);

    /*
    L.control.layers({
        'Terrain': osm.addTo(map)
            }, { position: 'bottomright', collapsed: false }//, { 'AOI': drawnItems },
            ).addTo(map);*/

   

   


            

        
