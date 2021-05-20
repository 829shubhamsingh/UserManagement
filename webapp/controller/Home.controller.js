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

			}
		});
	});