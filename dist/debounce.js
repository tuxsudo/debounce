"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var debounce = exports.debounce = function debounce(fn) {
	var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

	var timer = null;

	var cancel = function cancel() {
		clearTimeout(timer);
		timer = null;
	};

	function debouncedFn() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		cancel();

		timer = setTimeout(function () {
			fn.apply(undefined, args);
		}, time);
	}

	debouncedFn.cancel = cancel;

	return debouncedFn;
};

exports.default = debounce;

