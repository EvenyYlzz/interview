function bindEvent( elem , type , selector , fn ){
    if( fn == null ){
        fn = selector
        selector = null 
    }
    elem.addEventListener( type , e => {
        let target = e.target
        if( selector ){  // 需要代理
            if( target.matches(selector) ){
                fn.call( target , e )
            }
        } else {
            fn(e)  // 不需要代理
        }
    } )
}
