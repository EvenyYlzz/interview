function lazyload() {
    const imgs = document.getElementsByTagName('img');
    const len = imgs.length;
    // 视口的高度
    const viewHeight = document.documentElement.clientHeight;
    // 滚动条高度
    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    for (let i = 0; i < len; i++) {
        const offsetHeight = imgs[i].offsetTop;
        if (offsetHeight < viewHeight + scrollHeight) {
        const src = imgs[i].dataset.src;    //  取出data-src
        imgs[i].src = src;
        }
    }
}

// 可以使用节流优化一下
window.addEventListener('scroll', lazyload);

// data-drink="tea"  dataset.drink
// html5中可以使用data-前缀设置我们需要的自定义属性，来进行一些数据的存放