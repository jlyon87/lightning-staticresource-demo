var acumen = (function Models(acumen) {

	console.log("init index.js");

	var stuff = function() {
		console.log("init models");
	};

	acumen.models = {
		stuff: stuff,
//		cases: cases
	};

	console.log("returning from index.js");
	return acumen;
})(acumen || {});