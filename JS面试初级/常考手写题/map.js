Array.prototype.myMap = function(fn) {
    //首先检查一下参数
    let flag = !Array.isArray(arr) || !arr.length || typeof fn !=='function'
    if(flag){
        return  []
    }else{
        //每次调用我们都会返回一个新数组
        let newArr = []
        for(let i = 0; i<arr.length;i++){
            newArr[i] = fn(arr[i], i, arr)
        }
        return newArr
    }
}

const arr = [1,2,3,4,5]
const arrCopy = arr.myMap(item => item+1)
console.log(arrCopy)//  2,3,4,5,6