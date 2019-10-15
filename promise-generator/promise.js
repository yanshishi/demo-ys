
/**
 * Created by Administrator on 2017/10/16.
 */
//
function timeout(ms) {
   return new Promise((resolve, reject) => {
       setTimeout(resolve, ms, 'done');
       //setTimeout(reject, ms, 'notdone');
   });
}

timeout(100).then((value) => {
   console.log(value);
});



//let promise = new Promise(function(resolve, reject) {
//    console.log('Promise');
//    resolve();
//});
//
//promise.then(function() {//then指定的回调函数将在当前所有同步任务完成之后才会进行，所以resolved最后输出
//    console.log('resolved.');
//});
//
//console.log('Hi!');
//
//console.log('hello');

//实现ajax操作
//var getJSON = function(url) {
//    var promise = new Promise(function(resolve, reject){
//        var client = new XMLHttpRequest();
//        client.open("GET", url);
//        client.onreadystatechange = handler;
//        client.responseType = "json";
//        client.setRequestHeader("Accept", "application/json");
//        client.send();
//
//        function handler() {
//            if (this.readyState !== 4) {
//                return;
//            }
//            if (this.status === 200) {
//                resolve(this.response);
//            } else {
//                reject(new Error(this.statusText));
//            }
//        };
//    });
//
//    return promise;
//};
//
//getJSON("/posts.json").then(function(json) {
//    console.log('Contents: ' + json);
//}, function(error) {
//    console.error('出错了', error);
//});


// var p1 = new Promise(function (resolve, reject) {
//    setTimeout(() => reject(new Error('fail')), 3000)
// })

// var p2 = new Promise(function (resolve, reject) {
//    setTimeout(() => resolve(p1), 1000)
// })

// p2.then(result => console.log('result', result))
//    .catch(error => console.log("结果==" + error))
// Error: fail


//方法一
// var promise = new Promise (function(  resolve , reject){
//    try {
//        console.log('1Error1');
//        throw new Error('error');
//    }catch( err){
//         console.log('2Error1');
//        reject(err);
//    }
// });


// promise.catch( function( error){
//    console.log('catch Error',error);
// });
//
//
////方法二
// var promise = new Promise(function( resolve , reject){
//    reject(new Error('test---error'));
// });
// promise.catch( function( error){
//    console.log(error);
// });


    //如果promise的状态改成resolve，再抛出错误是无效的
//var promise = new Promise(function(resolve, reject){
//    resolve('成功');
//    throw new Error('test');
//});
//
//promise.then(function( value ){
//    console.log( value );
//}).catch(function( error){
//    console.log(error);
//});


//promise会吃掉错误
//const someAsyncthing = function(){
//    return new Promise(function( resolve , reject){
//        resolve(x + 2);
//    });
//}
//someAsyncthing().then(function(){
//    console.log('every is ok');
//});
//
//setTimeout( () => {console.log('123')}, 2000);


//var promise = new Promise( function ( resolve , reject){
//    resolve('成功');
//    setTimeout( function() {throw new Error('error')}, 0);
//});
//promise.then(function( value ){
//    console.log(value);
//});



//var someAsyncthing = function(){
//    return new Promise(function( resolve , reject){
//        resolve(x + 2);
//    });
//}
//someAsyncthing().catch(function( error){
//    console.log('oh no' , error);
//}).then(function(){
//    console.log('every is ok');
//});


//Promise.resolve()
//    .catch(function(error) {
//        console.log('oh no', error);
//    })
//    .then(function() {
//        console.log('carry on');
//    });
//


// var someAsyncThing = function(){
//     return new Promise(function( resolve , reject){
//         resolve( x + 2 );
//     });
// }
// someAsyncThing().then( function(){
//     return someOtherAsyncThing();
// } ).catch( function( error){
//     console.log('no', error);
//     y + 2;
// }).then(function(){
//     console.log('continue');
// });



//var someAsyncThing = function() {
//    return new Promise(function(resolve, reject) {
//        // 下面一行会报错，因为x没有声明
//        resolve(x + 2);
//    });
//};
//
//someAsyncThing().then(function() {
//    return someOtherAsyncThing();
//}).catch(function(error) {
//    console.log('oh no', error);
//    // 下面一行会报错，因为 y 没有声明
//    y + 2;
//}).then(function() {
//    console.log('carry on');
//});


//var someAsyncThing = function(){
//    return new Promise(function( resolve , reject){
//        resolve( x + 2 );
//    });
//}
//someAsyncThing().then( function(){
//    return someAsyncThing();
//} ).catch( function( error){
//    console.log('no', error);
//    y + 2;
//}).catch(function(){
//    console.log('continue', error);
//});


// const p1 = new Promise( function( resolve , reject){
//     resolve('hello');
// }).then( results => results).catch( e => e);

// const p2 = new Promise( function( resolve , reject){
//     throw new Error('1出错了');
// }).then( results => results).catch( e => e);

// Promise.all([p1, p2]).then( result => console.log(`result= ${result}`)).catch( e => console.log(`yyyy= ${e}`));