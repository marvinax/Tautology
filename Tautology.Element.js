/**
 * Basic element structure, index and actual object
 * @param {Array} index
 * @param {Object} object
 * @constructor
 */
Tautology.Element = function(index, object){
	this.index  = index
	this.object = object;
}

Tautology.Element.prototype.constructor = Tautology.Element;

/**
 * Clone method clones both object and index
 * @param  {Function} copyMethod
 * @return {Object}
 */
Tautology.Element.prototype.clone = function(copyMethod){
	return new Tautology.Element(this.index.clone(), 
								 copyMethod.call(this.object));	
};

/**
 * dispose element (not requently used because of GC)
 * @param  {[type]}
 * @return {[type]}
 */
Tautology.Element.prototype.dispose = function(disposeMethod){
	this.index = null;
	disposeMethod.call(this.object);
	this.object = null;
};

/**
 * [applyFunc description]
 * @param  {Function} function operation to be applied on element
 */
Tautology.Element.prototype.applyFunc = function(func){
	func.call(this);
};
