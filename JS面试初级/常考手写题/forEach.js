Array.prototype.myForEach = function(fn){
	if(typeof fn !== "function"){
		throw "参数必须为函数"
	}
	//get array going to be iterated
	let arr = this;
	if(!Array.isArray(arr)){
		throw "只能对数组使用forEach方法"
	}
	
	for(let index=0;index<arr.length;index++){
		fn(arr[index],index,arr)
	}
}

const arr = [1,2,3]
const arrCopy = []
arr.myForEach(item => {
    arrCopy.push(item+1)
})
console.log(arrCopy)// 2,3,4