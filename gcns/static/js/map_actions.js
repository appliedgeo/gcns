// map functions

function search_map(year, month, day){
	//alert(year + '-' + month + '-' + day);
	// get date
	var _date = new Date(year,month-1,day);
	var daynum = _date.getDOY() + 1;
	//alert(daynum);

	// clear map
	map.removeLayer(geoJsonLayer);

	// query api
			$.ajax({
   
              })

	// load map
}