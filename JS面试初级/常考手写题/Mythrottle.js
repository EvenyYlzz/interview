function throttle ( fn , delay = 100 ) {
    let timer = null
    return function (){
        if( timer ){
            return
        }
        timer = setTimeout( () => {
            fn.apply( this , arguments ) // 这里不能用fn（），会报错，无法获得事件源对象event
            timer = null
        } , delay ) // delay设置的时间内重复执行的定时任务会被清空
    }
}
