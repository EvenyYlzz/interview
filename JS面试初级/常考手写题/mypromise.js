function myPromise(fn) {
    // 回调函数集合
    this.callbacks = []
    // resolve 方法
    // 往实例上挂载 data
    // 依次执行回调函数
    function resolve(value) {
      setTimeout(() => {
        this.data = value;
        this.callbacks.forEach((callback) => callback(value));
      });
    }
 
   // 将 resolve 方法交还
   fn(resolve.bind(this));
 }
 
 myPromise.prototype.then = function (onResolve) {
   return new myPromise((resolve) => {
     this.callbacks.push(() => {
        // 将结果返回给传入的回调
        const res = onResolve(this.data);
        // 链式调用  的返回值还是 Promise 对象时
        if (res instanceof myPromise) {
          res.then(resolve);
        } else {
          resolve(res);
        }
    });
  }); 
 };
