/**
 * Created by Administrator on 2017/10/16.
 */

    //方法没有重载
//class Person{
//    constructor(name , age, job){
//        this.name = name ;
//        this.age = age;
//        this.job = job;
//        this.friends = ['yanshi'];
//    }
//    sayName( name ){
//        this.name  = name ;
//        console.log(this.name);
//    }
//    sayName(){
//        console.log(this.name);
//    }
//
//}
//let person = new Person('张三',25,'学生');
//person.sayName('ff');

//
//function studyEs6(){
//    class Point{
//        constructor(x, y){
//            this.x = x;
//            this.y = y;
//        }
//        static distance(a , b){
//            const dx = a.x - b.x;
//            const dy = a.y - b.y;
//            return Math.sqrt( dx* dx + dy* dy);
//        }
//    }
//    Point.len = 99;
//    let p1 = new Point( 3, 4);
//    let p2 = new Point(6, 8);
//    let dis = Point.distance(p1 , p2);
//    console.log(dis);
//    console.log(Point.len);
//
//}
//studyEs6();

//单例模式
//function studyEs6(){
//    class Cache{
//        constructor( id ,name){
//            this.id = 123;
//            this.name = '王五';
//        }
//
//        static getSingleTon(){
//            if ( !Cache.thisa){
//                Cache.thisa = new Cache();
//            }
//            return Cache.thisa;
//        }
//    }
//    let c1 = Cache.getSingleTon();
//    c1.name = 'aa';
//    let c2 = Cache.getSingleTon();
//    let c3 = Cache.getSingleTon();
//    console.log(c3.name);
//}
//studyEs6();

function studyEs6(){
    class Animal{
        constructor( name ){
            this.name = name;
        }
        speak(){
            console.log(this.name + ' jiao ');
        }
    }

    class Dog extends Animal{
        speak(){
            console.log(this.name + ' 叫 ');
        }
    }

    let dog = new Dog('狗');
    dog.speak();
}
studyEs6();