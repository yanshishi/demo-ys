/**
 * Created by Administrator on 2017/10/15.
 */

//let objKey1 = {};
//let objKey2 = {};
//let obj = new Object();
//obj[objKey1] = 33;
//obj[objKey2] = 66;
//
//for ( let key in obj ){
//    console.log(key);
//}

var mapData = new Map([["name", "yanshi"], ["pwd", "yanshishi"]]);
var objKey1 = {};
var objKey2 = {};
mapData.set(objKey1, '333');
mapData.set(objKey2, '666');
mapData['aaa'] = 'aaa';
//console.log(mapData.get(objKey1));
//console.log(mapData.has(objKey1));
//console.log(mapData.delete(objKey1));
//console.log(mapData.get("name"));

//mapData.clear();//清空

//遍历
//mapData.forEach( function ( value , key ){
//    console.log(key + ' = ' + value );
//});

//var [arr1 , arr2, arr3 , arr4] = [...mapData];
//console.log(arr3);

//for ( let elem of mapData){
//    console.log(elem);
//}

//var keyIterator = mapData.keys();
//console.log(keyIterator.next().value);//遍历器用法
//console.log(keyIterator.next().value);//遍历器用法
//console.log(keyIterator.next().value);//遍历器用法
//console.log(keyIterator.next().value);//遍历器用法
//
var valueIterator = mapData.values();
console.log(valueIterator);
//
//var size = mapData.size;
//console.log(size);


//for ( let key in mapData){
//    console.log(key);
//}