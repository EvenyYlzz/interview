function ajax ( url , successFn ){

    const xhr = new XMLHttpRequest()
    xhr.open( 'GET' , url , true)
    // true异步，避免卡住， false为同步

    xhr.onreadystatechange = function() {
        if( xhr.readyState == 4 ){
            if( xhr.status == 200 ){
                successFn(xhr.responseText)
            }
        }
    }

    xhr.send(null)
}
