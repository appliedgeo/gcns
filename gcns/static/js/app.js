// some data used in the forms
Ext.namespace('Ext.geodetic');

var LogoPanel, SearchPanel;

// adding day-of-year to date object
Date.prototype.getDOY = function(){
    var onejan = new Date(this.getFullYear(),0,1);
    return Math.ceil((this - onejan) / 86400000);
}

// today's date
var today = new Date();
var fulldate = Ext.Date.format(today, 'Ymd');
var doy = today.getDOY();
var year = today.getFullYear();

var site_url = "http://localhost";

var vector_data = site_url ;
var raster_data = site_url ;







Ext.require(['*']);

    Ext.onReady(function() {

        Ext.QuickTips.init();

        // NOTE: This is an example showing simple state management. During development,
        // it is generally best to disable state management as dynamically-generated ids
        // can change across page loads, leading to unpredictable results.  The developer
        // should ensure that stable state ids are set for stateful components in real apps.
        Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));


        var utm_input = Ext.create('Ext.form.Panel', {
            frame: true,
            title: 'Input UTM',
            width: 490,
            bodyPadding: 5,
            margin: '0 0 20 0',
            fieldDefaults: {
                labelAlign: 'left',
                labelWidth: 90,
                anchor: '100%'
            },

            items: [ {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'UTM(E)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'utm_e',
                name:'utm_e',
                allowBlank: false
            }, {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'UTM(N)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'utm_n',
                name:'utm_n',
                allowBlank: false
            }],
            buttons: [

            ]
        });


        var cassini_out = Ext.create('Ext.form.Panel', {
            frame: true,
            title: 'Cassini Out',
            width: 490,
            bodyPadding: 5,
            margin: '20 0 0 0',
            fieldDefaults: {
                labelAlign: 'left',
                labelWidth: 90,
                anchor: '100%'
            },

            items: [ {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'Cassini(X)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'out_cassini_x',
                name:'out_cassini_x',
                allowBlank: false
            }, {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'Cassini(Y)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'out_cassini_y',
                name:'out_cassini_y',
                allowBlank: false
            }],
            buttons: [
                        {
                    text: 'Convert to Cassini'
                },{
                    text: 'Clear'
                }

            ]
        });

        // sheet corners
        var corner1_utm = Ext.create('Ext.form.Panel', {
            frame: true,
            labelAlign: 'top',
            title: 'Sheet Corner 1',
            bodyStyle:'padding:5px',
            width: 490,
            //defaults: {width: 230},
            items: [{
                layout:'column',
                border:true,
                items:[{
                    columnWidth:.5,
                    layout: 'form',
                    border:false,
                    items: [{
                        xtype:'textfield',
                        fieldLabel: 'UTM (E)',
                        name: '1_utm_e',
                        anchor:'95%'
                    }, {
                        xtype:'textfield',
                        fieldLabel: 'CASSINI (X)',
                        name: '1_cassini_x',
                        anchor:'95%'
                    }]
                },{
                    columnWidth:.5,
                    layout: 'form',
                    border:false,
                    items: [{
                        xtype:'textfield',
                        fieldLabel: 'UTM (N)',
                        name: '1_utm_n',
                        anchor:'95%'
                    },{
                        xtype:'textfield',
                        fieldLabel: 'CASSINI (Y)',
                        name: '1_cassini_y',
                        anchor:'95%'
                        }]
                    }]
                }],
            buttons: [

            ]
        });

        var corner2_utm = Ext.create('Ext.form.Panel', {
            frame: true,
            labelAlign: 'top',
            title: 'Sheet Corner 2',
            bodyStyle:'padding:5px',
            width: 490,
            //defaults: {width: 230},
            items: [{
                layout:'column',
                border:true,
                items:[{
                    columnWidth:.5,
                    layout: 'form',
                    border:false,
                    items: [{
                        xtype:'textfield',
                        fieldLabel: 'UTM (E)',
                        name: '2_utm_e',
                        anchor:'95%'
                    }, {
                        xtype:'textfield',
                        fieldLabel: 'CASSINI (X)',
                        name: '2_cassini_x',
                        anchor:'95%'
                    }]
                },{
                    columnWidth:.5,
                    layout: 'form',
                    border:false,
                    items: [{
                        xtype:'textfield',
                        fieldLabel: 'UTM (N)',
                        name: '2_utm_n',
                        anchor:'95%'
                    },{
                        xtype:'textfield',
                        fieldLabel: 'CASSINI (Y)',
                        name: '2_cassini_y',
                        anchor:'95%'
                        }]
                    }]
                }],
            buttons: [

            ]
        });

        
        var corner3_utm = Ext.create('Ext.form.Panel', {
            frame: true,
            labelAlign: 'top',
            title: 'Sheet Corner 3',
            bodyStyle:'padding:5px',
            width: 490,
            //defaults: {width: 230},
            items: [{
                layout:'column',
                border:true,
                items:[{
                    columnWidth:.5,
                    layout: 'form',
                    border:false,
                    items: [{
                        xtype:'textfield',
                        fieldLabel: 'UTM (E)',
                        name: '3_utm_e',
                        anchor:'95%'
                    }, {
                        xtype:'textfield',
                        fieldLabel: 'CASSINI (X)',
                        name: '3_cassini_x',
                        anchor:'95%'
                    }]
                },{
                    columnWidth:.5,
                    layout: 'form',
                    border:false,
                    items: [{
                        xtype:'textfield',
                        fieldLabel: 'UTM (N)',
                        name: '3_utm_n',
                        anchor:'95%'
                    },{
                        xtype:'textfield',
                        fieldLabel: 'CASSINI (Y)',
                        name: '3_cassini_y',
                        anchor:'95%'
                        }]
                    }]
                }],
            buttons: [

            ]
        });


        var corner4_utm = Ext.create('Ext.form.Panel', {
            frame: true,
            labelAlign: 'top',
            title: 'Sheet Corner 4',
            bodyStyle:'padding:5px',
            width: 490,
            //defaults: {width: 230},
            items: [{
                layout:'column',
                border:true,
                items:[{
                    columnWidth:.5,
                    layout: 'form',
                    border:false,
                    items: [{
                        xtype:'textfield',
                        fieldLabel: 'UTM (E)',
                        name: '4_utm_e',
                        anchor:'95%'
                    }, {
                        xtype:'textfield',
                        fieldLabel: 'CASSINI (X)',
                        name: '4_cassini_x',
                        anchor:'95%'
                    }]
                },{
                    columnWidth:.5,
                    layout: 'form',
                    border:false,
                    items: [{
                        xtype:'textfield',
                        fieldLabel: 'UTM (N)',
                        name: '4_utm_n',
                        anchor:'95%'
                    },{
                        xtype:'textfield',
                        fieldLabel: 'CASSINI (Y)',
                        name: '4_cassini_y',
                        anchor:'95%'
                        }]
                    }]
                }],
            buttons: [

            ]
        });



        var cassini_form = Ext.create('Ext.form.Panel', {
            frame: true,
            //title: 'Cassini to UTM',
            width: 490,
            bodyPadding: 5,

            fieldDefaults: {
                labelAlign: 'left',
                labelWidth: 90,
                anchor: '100%'
            },

            items: [{
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'Cassini(X)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'cassini_x2',
                name:'cassini_x2',
                allowBlank: false
            }, {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'Cassini(Y)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'cassini_y2',
                name:'cassini_y2',
                allowBlank: false
            }, {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'UTM(E)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'utm_e2',
                name:'utm_e2',
                allowBlank: false
            }, {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'UTM(N)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'utm_n2',
                name:'utm_n2',
                allowBlank: false
            }],
            buttons: [{
                text: 'Convert',
                handler: function(){
                    this.up('form').getForm().isValid();
                    
                }
            },{
                text: 'Clear',
                handler: function(){
                    this.up('form').getForm().reset();

                }
            }

            ]
        });

        //formPanel2.render('search-form2');

        // form3

        var geog_form = Ext.create('Ext.form.Panel', {
            frame: true,
            //title: 'Geographic to Cassini',
            width: 490,
            bodyPadding: 5,

            fieldDefaults: {
                labelAlign: 'left',
                labelWidth: 90,
                anchor: '100%'
            },

            items: [ {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'Latitude',
                margin: "10 0 0 0",
                //width: 310,
                id: 'latitude',
                name:'latitude',
                allowBlank: false
            }, {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'Longitude',
                margin: "10 0 0 0",
                //width: 310,
                id: 'longitude',
                name:'longitude',
                allowBlank: false
            }, {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'Cassini(X)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'cassini_x3',
                name:'cassini_x3',
                allowBlank: false
            }, {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'Cassini(Y)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'cassini_y3',
                name:'cassini_y3',
                allowBlank: false
            }],
            buttons: [{
                text: 'Convert',
                handler: function(){
                    this.up('form').getForm().isValid();
                    
                }
            },{
                text: 'Clear',
                handler: function(){
                    this.up('form').getForm().reset();

                }
            }

            ]
        });
        

        //formPanel3.render('search-form3');


        var utm_panel = new Ext.Panel({
                title: 'UTM to Cassini',
                //bodyStyle:'margin:10px',
                bodyPadding: 5,
                //padding: '10 0 10 0'
                items:[utm_input, corner1_utm, corner2_utm, corner3_utm, corner4_utm, cassini_out]
            });

        var cassini_panel = new Ext.Panel({
                title: 'Cassini to UTM',
                items:[cassini_form]
            });


        var geog_panel = new Ext.Panel({
                title: 'Geographic to Cassini',
                items:[geog_form]
            });

     
        var viewport = Ext.create('Ext.Viewport', {
            id: 'border-example',
            layout: 'border',
            items: [
            // create instance immediately
            Ext.create('Ext.Component', {
                region: 'north',
                height: 90, // give north and south regions a height
                contentEl: 'northdiv'
            }), 
                {  
                    region: 'west',
                    xtype: 'panel',
                    layout:'border',
                    width: 500,
                    minWidth: 400,
                    active:true,
                    collapsible: true,
                    preventHeader: true,
                    hideCollapseTool: true,
                    split: true,
                    items: [{
                            region: 'west',
                            xtype: 'panel',
                            width: 500,
                            //minWidth: 200,
                            //height: 150, 
                            title: 'Convert Data',
                            //bodyPadding: 10,
                            layout:'accordion',
                            //margin: 10,
                            //contentEl: 'search-form'
                            items: [utm_panel, cassini_panel, geog_panel]

                        }//, LogoPanel
                    ],
                    listeners: {
                        collapse: function() {
                            //fix_to_bottom();
                        },
                        expand: function() {
                            //fix_to_bottom();
                        }
                    }

                },
            // in this instance the TabPanel is not wrapped by another panel
            // since no title is needed, this Panel is added directly
            // as a Container
            Ext.create('Ext.tab.Panel', {
                region: 'center', // a center region is ALWAYS required for border layout
                deferredRender: false,
                activeTab: 0,     // first tab initially active
                items: [{
                    contentEl: 'map',
                    title: 'Map',
                    autoScroll: true
                }]
            })]
        });

        



        var tbar = Ext.create('Ext.toolbar.Toolbar', {
            items: [
                {
                    // xtype: 'button', // default for Toolbars
                    text: 'Max Extent',
                    cls: 'tools_cls',
                    icon: '/static/dist/images/default.png',
                    handler: function(){
                        map.setView([-0.1443972, 40.274636], 7);
                    }
                },
                '-',
                {
                    //xtype: 'button',
                    text : 'Pan',
                    cls: 'tools_cls',
                    icon: '/static/dist/images/pan.png'
                },
                '-',
                {
                    // xtype: 'button', 
                    text: 'Zoom Out',
                    cls: 'tools_cls',
                    icon: '/static/dist/images/zoom-out.png',
                    handler: function(){
                        map.zoomOut();
                    }
                },
                '-',
                {
                    //xtype: 'button',
                    text : 'Zoom In',
                    cls: 'tools_cls',
                    icon: '/static/dist/images/zoom-in.png',
                    handler: function(){
                        map.zoomIn();
                    }
                },
                '-',
                {
                    // xtype: 'button', 
                    text: 'Print Map',
                    cls: 'tools_cls',
                    icon: '/static/dist/images/print.png'
                },
                
                // begin using the right-justified button container
                '->', // same as { xtype: 'tbfill' }
                {
                    // xtype: 'button', 
                    text: 'About',
                    cls: 'tools_cls',
                    icon: '/static/dist/images/about.png',
                    handler: function(){
                        var win = new Ext.Window({
                            width:500,
                            height:500,
                            autoScroll:true,
                            title: 'About the System',
                            autoLoad:{
                                url:'pages/about_us.html'
                            }
                        });
                        win.show();
                    }
                },
                '-',
                
                {
                    // xtype: 'button',
                    text: 'Help',
                    cls: 'tools_cls',
                    icon: '/static/dist/images/help.png',
                    handler: function(){
                        var win = new Ext.Window({
                            width:500,
                            height:500,
                            autoScroll:true,
                            title: 'Help',
                            autoLoad:{
                                url:'pages/help.html'
                            }
                        });
                        win.show();

                    }
                },
            ]
        });

        tbar.render('toolbar');

        
      
    });
