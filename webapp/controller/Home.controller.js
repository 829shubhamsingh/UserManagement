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