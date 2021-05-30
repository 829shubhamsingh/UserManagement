sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../util/formatter"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,formatter) {
		"use strict";

		return Controller.extend("com.personal.usermanagement.controller.Home", {
            formatter:formatter,
            onInit: function () {
                var localModel=new sap.ui.model.json.JSONModel();
                localModel.loadData("model/mockData.json");
                this.getView().setModel(localModel);

            },
            onAfterRendering:function(){
                this.geocoder = new google.maps.Geocoder();
                window.mapOptions = {                          
                    center: new google.maps.LatLng(23, 82.5),
                    zoom: 8,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };                           
                //This is basically for setting the initial position of the map, ie. Setting the coordinates, for the place by default

                var map = new google.maps.Map(this.getView().byId("map_canvas").getDomRef(),mapOptions);
                var infowindow = new google.maps.InfoWindow;
                var geocoder = new google.maps.Geocoder();
                var marker = new google.maps.Marker({
                map: map,
                });

                google.maps.event.addListener(map, "click", function (e) {
                var lolatitude = e.latLng.lat(); //calculates latitude of the point of click
                var lolongitude = e.latLng.lng()//calculates longitude of the point of click
                jQuery.sap.require("sap.m.MessageToast");
                sap.m.MessageToast.show("Lat"+lolatitude+"\n Lng"+lolongitude);
                });
            },
            onHandleEditDetails:function(oEvent){
                if (!this.oDefaultDialog){
                    this.oDefaultDialog=sap.ui.xmlfragment(this.getView().getId(),"com.personal.usermanagement.Fragments.Edit",this)
                    this.getView().addDependent(this.oDefaultDialog);
                }
                var selData=this.getView().getModel().getProperty(oEvent.getSource().getBindingContext().sPath)
                var localModel=new sap.ui.model.json.JSONModel();
                localModel.setData(selData);
                this.getView().setModel(localModel,'selEmp');
                this.oDefaultDialog.open();
            }, 
            onHandleCloseEditDialog:function(){
                this.getView().byId('editDialog').close();
            }
		});
	});