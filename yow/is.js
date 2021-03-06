var isType = module.exports.isType = function(obj, type) {
	return Object.prototype.toString.call(obj) == '[object ' + type + ']';
};

module.exports.isArray = function(obj) {
	return isType(obj, 'Array');
};

module.exports.isNumber = function(obj) {
	return isType(obj, 'Number');
};

module.exports.isString = function(obj) {
	return isType(obj, 'String');
};

module.exports.isDate = function(obj) {
	return isType(obj, 'Date') && !isNaN(obj.getTime());
};

module.exports.isObject = function(obj) {
	return obj !== null && isType(obj, 'Object');
};

module.exports.isFunction = function(obj) {
	return typeof obj === 'function';
};

module.exports.isInteger = function (n) {
    return Number(n) === n && n % 1 === 0;
}

module.exports.isFloat = function (n) {
    return Number(n) === n && n % 1 !== 0;
}
