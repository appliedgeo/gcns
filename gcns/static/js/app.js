// some data used in the forms
Ext.namespace('Ext.geodetic');

Ext.geodetic.locations = [

    ['Sigowet', 35.1108, -0.2981],
    ['Ainamoi', 35.2752, -0.3012],
    ['Belgut', 35.2690, -0.4106],
    ['Kipkelion West', 35.3883, -0.1571],
    ['Kipkelion East', 35.5367, -0.1645]

];

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


        var formPanel = Ext.create('Ext.form.Panel', {
            frame: true,
            //title: 'UTM to Cassini',
            width: 290,
            bodyPadding: 5,

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
            }/*, {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'Cassini(X)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'cassini_x',
                name:'cassini_x',
                allowBlank: false
            }, {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'Cassini(Y)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'cassini_y',
                name:'cassini_y',
                allowBlank: false
            }*/],
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

        // sheet corners
        var sheetCorners = Ext.create('Ext.form.Panel', {
            frame: true,
            title: 'Sheet Corners',
            width: 290,
            bodyPadding: 5,

            fieldDefaults: {
                labelAlign: 'left',
                labelWidth: 90,
                anchor: '100%'
            },

            items: [ {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: '1. UTM(E)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'utm_e',
                name:'utm_e',
                allowBlank: false
            }, {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: '1. UTM(N)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'utm_n',
                name:'utm_n',
                allowBlank: false
            }/*, {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'Cassini(X)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'cassini_x',
                name:'cassini_x',
                allowBlank: false
            }, {
                xtype: 'textfield',
                //anchor: '100%',            
                fieldLabel: 'Cassini(Y)',
                margin: "10 0 0 0",
                //width: 310,
                id: 'cassini_y',
                name:'cassini_y',
                allowBlank: false
            }*/],
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

        //formPanel.render('search-form');


        // form2

        var formPanel2 = Ext.create('Ext.form.Panel', {
            frame: true,
            //title: 'Cassini to UTM',
            width: 290,
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

        var formPanel3 = Ext.create('Ext.form.Panel', {
            frame: true,
            //title: 'Geographic to Cassini',
            width: 290,
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
                items:[formPanel]
            });

        var cassini_panel = new Ext.Panel({
                title: 'Cassini to UTM',
                items:[formPanel2]
            });


        var geog_panel = new Ext.Panel({
                title: 'Geographic to Cassini',
                items:[formPanel3]
            });


        SearchPanel = new Ext.Panel({
            id: "searchpanelID",
            layout: 'border',
            region: 'west',
            width:300,
            minWidth:200,
            height: 500, 
            animate: true,
            preventHeader: true,
             hideCollapseTool: true,
            collapsible: true,
            split: true,
            items: [
                        
                        {
                            region: 'west',
                            xtype: 'panel',
                            width: 300,
                            //minWidth: 200,
                            //height: 150, 
                            title: 'Convert Data',
                            //bodyPadding: 10,
                            layout:'accordion',
                            //margin: 10,
                            //contentEl: 'search-form'
                            items: [utm_panel, cassini_panel, geog_panel]

                        }/*,
                        {
                            region: 'south',
                            xtype: 'panel',
                            width: 300,
                            minWidth: 200,
                            height: 150, 
                            title: 'Downloads',
                            bodyPadding: 10,
                            html: '<a href="#">PDF map</a><br>'+
                            '<a href="#">JPG map</a><br>'+
                            '<a href="'+vector_data+'</a><br>'+
                            '<a href="'+raster_data+'</a>'

                        }*/
            ]
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
                    width: 300,
                    minWidth: 200,
                    active:true,
                    collapsible: true,
                    preventHeader: true,
                    hideCollapseTool: true,
                    split: true,
                    items: [SearchPanel//, LogoPanel
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

        
        // get a reference to the HTML element with id "hideit" and add a click listener to it
        /*Ext.get("hideit").on('click', function(){
            // get a reference to the Panel that was created with id = 'west-panel'
            var w = Ext.getCmp('west-panel');
            // expand or collapse that Panel based on its collapsed property state
            w.collapsed ? w.expand() : w.collapse();
        }); */
    });
