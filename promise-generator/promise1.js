let persion = {
    "name": "aaa",
    func: 
         new Promise (function (reject, resolve) {
            console.log('name1', this.name);
        })
    
};

let arr = ['111', '222', '333'];
function test(arr) {
    arr.forEach(item => {
        persion.name = item;
        console.log('name2', persion.func, persion.name);
    });
}
console.log('name4', persion.name);
test(arr)


// let newArr= [1, 2, 3];
let newArr = [{"name":"aa", age: 1},{"name":"bb", age: 2} ]
// newArr = newArr.filter(item => {
//     return item.name = 'cc';
// });
newArr.map(item => {
     item.name  = 'cc';
    //  item = 'aa';
    // return item
});
newArr.forEach(item => {
    item.name  = 'dd';
     item = 'aa';
    return item
});
console.log('newArr', newArr);


let num = [{"name":"aa", age: 1}, {"name":"aa", age: 4}];
let num2 = [{"name":"aa", age: 1}, {"name":"aa", age: 2}];
num = num.concat(num2)
// num = new Set(num);
console.log('num', num);

function timeout(){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,1000,"绿灯");
    })
}
function timeout2(){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,2000,"黄灯");
    })
}
function timeout3(){

    return new Promise(function(resolve,reject){
        setTimeout(resolve,3000,"红灯");
    })
}
function restart(){
    timeout().then((value)=>{
        console.log(value);
    })
    timeout2().then((value)=>{
        console.log(value);
    })
    timeout3().then((value)=>{
        console.log(value);
        restart();
    })
}
// restart()