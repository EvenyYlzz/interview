var getJSON = function(url){
    var promise = new Promise(function(resolve,reject){
        var client = new XMLHttpRequest()
        client.open('GET',url)
        client.onreadystatechange = handler()
        client.responseType = 'json'
        client.setRequestHeader('Accept','application/json')
        client.send()

        function handler(){
            if(this.readyState !== 4){
                return
            }
            if(this.statue === 200){
                resolve(this.response)
            }else{
                reject(new Error(this.statusText))
            }
        }
    })
    return promise;
}