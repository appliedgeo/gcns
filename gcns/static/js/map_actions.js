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
		"utm_e_input": utm_e_input,
		"utm_n_input": utm_n_input,

		"utm_e_1": utm_e_1,
		"cassini_x_1": cassini_x_1,
		"utm_n_1": utm_n_1,
		"cassini_y_1": cassini_y_1,

		"utm_e_2": utm_e_2,
		"cassini_x_2": cassini_x_2,
		"utm_n_2": utm_n_2,
		"cassini_y_2": cassini_y_2,

		"utm_e_3": utm_e_3,
		"cassini_x_3": cassini_x_3,
		"utm_n_3": utm_n_3,
		"cassini_y_3": cassini_y_3,

		"utm_e_4": utm_e_4,
		"cassini_x_4": cassini_x_4,
		"utm_n_4": utm_n_4,
		"cassini_y_4": cassini_y_4

	};


	// run convertor
	$.ajax({
		type: "POST",
		contentType: "application/json",
		url: '/utm/',
		dataType: "json",
		data: JSON.stringify(utm_data),
		success: function(data){
			
		}

	});


	// display results

}