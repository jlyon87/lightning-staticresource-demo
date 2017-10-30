({
	init: function(cmp, event, helper) {
		console.log("cmp init"); // Lockerservice eats the logs
		cmp.set("v.status", "cmp init");
	},

	scriptsLoaded: function(cmp, event, helper) {
		cmp.set("v.status", "scriptsLoaded");
		acumen.models.stuff();
//		acumen.models.cases.init();
	},

	doAction: function(cmp, event, helper) {
		console.log("do Action"); // Lockerservice eats the logs
		cmp.set("v.status", "do action");
	}
})