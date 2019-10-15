/**
 * Created by Administrator on 2017/10/17.
 */

function *helloWorld(){
   yield console.log('hello');
   yield console.log('world');
   yield console.log('end');
}

var hw = helloWorld();
hw.next();
hw.next();
hw.next();
// hw.next();


//function *f(){
//    console.log('执行了');
//}
//var fu = f();
//setTimeout(function(){
//    fu.next();
//}, 2000);

//function* demo(){
//    console.log('123' + (yield));
//    console.log('123' + (yield 345));
//}
//var de = demo();
//setTimeout(function(){
//    de.next();
//},1000);


//var arr = [1, [[2, 3], 4], [5, 6]];
//var fl = function* ( arr ){
//    var length = arr.length;
//    for( var i = 0 ; i < length ; i++){
//        var item = arr[i];
//        if (typeof item !== 'number') {
//            yield* fl(item);
//        } else {
//            yield item;
//        }
//    };
//}
//
//for( var f of  fl(arr) ){
//    console.log(f);
//}

//function b(){
//    function *a(){
//        console.log('aaa' +(yield "愿挨"));
//        console.log('bbb' + (yield '换了'));
//        console.log('ccc' + (yield 'ggg'));
//        return 'end';
//    }
//    let d = a();
//    console.log(d.next());
//    console.log(d.next('kkk'));
//    console.log(d.next());
//    console.log(d.next());
//}
//b();


//function *yun( num){
//    let x= 2 * (yield num);
//    console.log('x = ' + x);
//    let y = yield x*3;
//    console.log('y = ' + y);
//    console.log( x , y);
//
//
//}
//var g = yun(5);
//console.log(g.next());
//console.log(g.next());
//console.log(g.next(3));
//console.log(g.next());

function* genFunc() {
    console.log('step 1')
    yield 1
    console.log('step 2')
    yield 2
    console.log('step 3')
    return 3
}
var gen = genFunc()
var ret = gen.next() // 输出: 'step 1'
console.log(ret.value) // 1
console.log(ret.done) // false
var ret = gen.next() // 输出: 'step 2'
console.log(ret.value) // 2
console.log(ret.done) // false
var ret = gen.next() // 输出: 'step 3'
console.log(ret.value) // 3
console.log(ret.done) // true


function* genFunc1 () {
    var result = yield 1
    console.log(result)
}
var gen1 = genFunc1()
gen1.next() // 此时generator内部执行到 yield 1 并暂停，但还未对result赋值！
// 即使异步也可以！
setTimeout(function () {
    gen1.next(123) // 给result赋值并继续执行，输出: 123
}, 1000)


var people=['Wayou','John','Sherlock'];
//sayHello函数本来接收三个单独的参数人妖，人二和人三
function sayHello(people1,people2,people3){
	console.log(`Hello ${people1},${people2},${people3}`);
}
//但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
sayHello(...people);//输出：Hello Wayou,John,Sherlock 

//而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法
sayHello.apply(null,people);//输出：Hello Wayou,John,Sherlock 