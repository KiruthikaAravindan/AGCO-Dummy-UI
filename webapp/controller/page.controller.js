sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.agcoagcoworkbox.controller.page", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf pmc_ui.inbox
		 */
		onInit: function() {
			/*var dynaUrl = "https://aptrestwebprttj4jqbl.eu3.hana.ondemand.com/workbox-web/";
			jQuery.sap.byId("contentFrameDiv").show();
			jQuery.sap.byId("contentFrameId").attr("src", dynaUrl);
			jQuery.sap.byId("contentFrameDiv").height("100%");*/
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf pmc_ui.inbox
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf pmc_ui.inbox
		 */
		onAfterRendering: function() {
			var dynaUrl = "https://aptrestweb" + location.hostname.split('.')[0].split('-').pop() + ".eu3.hana.ondemand.com/workbox-web/";
			jQuery.sap.byId("contentFrameDiv").show();
			jQuery.sap.byId("contentFrameId").attr("src", dynaUrl);
			jQuery.sap.byId("contentFrameDiv").height("100%");
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf pmc_ui.inbox
		 */
		//	onExit: function() {
		//
		//	}

	});
});