// console.log('deepClone')

const obj1 = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing'
    },
    arr: ['a','b']
}


const obj2 = deepClone(obj1)

// const obj1 = obj
obj2.address.city = 'shanghai'
console.log(obj1.address.city)
console.log(obj2.address.city)


function deepClone( obj = {} ) {
    
    if( typeof obj !== 'object' || obj == null ){
        return obj
    }


    //初始化返回结果
    let result
    if( obj instanceof Array ){
        result = []
    } else {
        result = {}
    }

    for( let key in obj ){
        // 保证key不是原型的属性
        if( obj.hasOwnProperty(key) ){
            // 递归调用
            result[key] = deepClone(obj[key])
        }
    }

    // 返回结果
    return result
}