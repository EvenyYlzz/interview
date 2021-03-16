//定义一个 Animal 构造函数，作为 Dog 的父类
function Animal () {
    this.superType = 'Animal';
}

Animal.prototype.superSpeak = function () {
    alert(this.superType);
}

function Dog (name) {
    this.name = name;
    this.type = 'Dog';  
}
//改变Dog的prototype指针，指向一个 Animal 实例
Dog.prototype = new Animal();

Dog.prototype.speak = function () {
　　alert(this.type);
}
var doggie = new Dog('jiwawa');
doggie.superSpeak();  //Animal 

// - 1.定义父类属性
// - 2.在父类的`prototype`写上父类的方法
// - 3.定义子类自己的属性
// - 4.子类的`prototype`指向`=new 父类()`
// - 5.（在子类的`prototype`写上子类自己的方法）
// - 优点：父类方法可以复用
// - 缺点：引用类型的属性会污染所有子类