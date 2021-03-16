function debounce ( fn , delay = 500 ) {
    let timer = null // timer在闭包中，不对外暴露，以免不小心获取进行修改造成错误
    return function () {
        if( timer ){
            clearTimeout( timer )
        } // 清空定时器
        timer = setTimeout( () => {
            fn.apply( this , arguments )
            timer = null
        } , delay )
    }
}

const input1 = document.getElementById('input1')
input1.addEventListener('keyup',debounce(() => {
    console.log(input1.value)
},600))