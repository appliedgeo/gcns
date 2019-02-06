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


function toCassini(){
	//alert('Running converter..');

	// get utm values
	var utm_e_input = Ext.getCmp('utm_e_input').getValue();
	var utm_n_input = Ext.getCmp('utm_n_input').getValue();

	// get sheet corners
	// corner 1
	var utm_e_1 = Ext.getCmp('1_utm_e').getValue();
	var cassini_x_1 = Ext.getCmp('1_cassini_x').getValue();
	var utm_n_1 = Ext.getCmp('1_utm_n').getValue();
	var cassini_y_1 = Ext.getCmp('1_cassini_y').getValue();

	// corner 2
	var utm_e_2 = Ext.getCmp('2_utm_e').getValue();
	var cassini_x_2 = Ext.getCmp('2_cassini_x').getValue();
	var utm_n_2 = Ext.getCmp('2_utm_n').getValue();
	var cassini_y_2 = Ext.getCmp('2_cassini_y').getValue();

	// corner 3
	var utm_e_3 = Ext.getCmp('3_utm_e').getValue();
	var cassini_x_3 = Ext.getCmp('3_cassini_x').getValue();
	var utm_n_3 = Ext.getCmp('3_utm_n').getValue();
	var cassini_y_3 = Ext.getCmp('3_cassini_y').getValue();

	// corner 4
	var utm_e_4 = Ext.getCmp('4_utm_e').getValue();
	var cassini_x_4 = Ext.getCmp('4_cassini_x').getValue();
	var utm_n_4 = Ext.getCmp('4_utm_n').getValue();
	var cassini_y_4 = Ext.getCmp('4_cassini_y').getValue();


	var utm_data = {
		"utm_e": utm_e_input,
		"utm_n": utm_n_input,

		"utm_x1": utm_e_1,
		"cassini_x1": cassini_x_1,
		"utm_y1": utm_n_1,
		"cassini_y1": cassini_y_1,

		"utm_x2": utm_e_2,
		"cassini_x2": cassini_x_2,
		"utm_y2": utm_n_2,
		"cassini_y2": cassini_y_2,

		"utm_x3": utm_e_3,
		"cassini_x3": cassini_x_3,
		"utm_y3": utm_n_3,
		"cassini_y3": cassini_y_3,

		"utm_x4": utm_e_4,
		"cassini_x4": cassini_x_4,
		"utm_y4": utm_n_4,
		"cassini_y4": cassini_y_4

	};


	// run convertor
	$.ajax({
		type: "POST",
		contentType: "application/json",
		url: '/utm/',
		dataType: "json",
		data: JSON.stringify(utm_data),
		success: function(data){

			console.log(data.easting);
			console.log(data.northing);

			Ext.getCmp('out_cassini_x').setValue(data.easting);
			Ext.getCmp('out_cassini_y').setValue(data.northing);
			
		}

	});


	// display results

}