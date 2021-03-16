function Person (name, age) {
    //人都有姓名，年龄，会吃饭，会睡觉
    this.name = name;
    this.age = age;
    this.eat = function () {
        alert('吃饭');
    }
    //  方法也可以写到prototype上
    // Person.prototype.eat = function(){
    //     alert('吃饭');
    // }
}

//当然学生也有自己的一些属性：学号，学校名称等，和方法，比如都要去做一件事：写作业
function Student (stuID, schoolName, name, age) {
    Person.call(this, name, age);
    this.stuID = stuID;
    this.schoolName = schoolName;
    //用call调用 Person,以实现继承
}

Student.prototype.doHomework = function () {
    alert('做作业');
}

//实例化一个学生
var stu1 = new Student(1001, '第一小学', '王宝宝',20);// 传参到父类

// - 1.定义父类属性（方法）
// - 2.（在父类的`prototype`写上父类的方法）
// - 3.定义子类自己的属性，并用`父类.call(this)`盗用构造继承
// - 4.（在子类的`prototype`写上子类自己的方法）
// - 优点：可以向父类传递参数（即call后面传参）
// - 缺点：无法继承原型链上的属性与方法；每个实例都拷贝一份，占用内存大，尤其是方法过多的时候