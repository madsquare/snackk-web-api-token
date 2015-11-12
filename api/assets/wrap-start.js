/**
 * snackk-web-api-token module.
 * v1.0.0
 * https://github.com/madsquare/snackk-web-api-token.git
**/
(function (root, factory) {
	if (typeof define === 'function') {
		define(['jquery', 'jquery-cookie'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		if (typeof root.snackkModule === 'undefined') {
			root.snackkModule = {}
		}
		root.snackkModule.token = factory();
	}
}(this, function () {