/**
 * Created by Administrator on 2017/10/15.
 */

//var set = new Set([1, 2, 3, 4, 2, 8, 1]);
//var set = new Set();
//var setArr = [1, 2, 3, 4, 2, 8, 1].map( function (elem){
//    set.add(elem);
//    return elem*2;
//});
////for ( let i = 0 ; i < 10 ; i++){
////    set.add(i);
////}
//
//console.log('setArr=' + setArr);
////console.log('set=' + set);
////set.delete(2);//删除
////set.clear();//清空
//var arr = [...set];//扩展运算符 （...）内部使用for...of循环
//console.log('arr=' + arr);
//
//var filterArr =  [1, 2, 3, 4, 2, 8, 4].filter( function (elem){
//    if ( elem > 3 ){
//        return true;
//    }
//    return false;
//
//});
//console.log('filterArr = ' + filterArr);
//for( var elem of set){
//    console.log(elem);
//}

//遍历键值
//set.forEach(function(value , key ){
//    console.log(value + " = " + key);
//})

//console.log(set.has(8));

//遍历值
//let setter = set.values();
//for(let val of setter){
//    console.log(val);
//}

//数量
//console.log(set.size);

//map和filter也可以用于set中


//求并集
let a = new Set([1, 2, 3]);
let b = new Set([1, 2, 5]);
//求并集
//let union = new Set([...a,...b]);
//console.log([...union]);
//求交集
//let interset = [...a].filter(function( value ){
//    return b.has(value);
//
//});
//console.log([...interset]);

//求差集
let atob = [...a].filter(( elem ) => {
    return !b.has(elem);
});
console.log([...atob]);