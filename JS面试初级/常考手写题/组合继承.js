function Parent5 () {
    this.name = 'parent5';
    this.play = [1, 2, 3];
}
function Child5() {
    Parent5.call(this);
    // 为确保Parent构造函数不会覆盖Child定义的属性
    // 可以在调用父类构造函数之后再给子类实例添加额外的属性
    this.type = 'child5';
}
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5

// 不直接将前两种结合起来的原因：因为会导致构造函数的指向不对
