Array.prototype.reduce = function(fn,accumulator){
	
	if(typeof fn !== "function"){
		throw "参数必须为函数"
	}
	//get array going to be iterated
	let arr = this;
	if(!Array.isArray(arr)){
		throw "只能对数组使用forEach方法"
	}
	let index = 0;
	if(!accumulator){
		index = 1;
		accumulator = arr[0];
	}
	for(;index<arr.length;index++){
		let invokedReturn = fn(accumulator ,arr[index],index,arr);
		accumulator = invokedReturn ;
	}
	return accumulator ;
}
