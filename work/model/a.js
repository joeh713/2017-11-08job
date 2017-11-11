define(function(require,exports,module){
	let moda1 = require('./a1.js');
	let moda2 = require('./a2.js');

	exports.res = moda1.num1+moda2.num2;
});