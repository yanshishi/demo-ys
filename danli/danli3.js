
const danli1 = require('./danli1.js');
const danli2 = require('./danli2.js');

function danli3() {
    console.log('danli1', danli1.danli1());

    console.log('danli2', danli2.danli2());
}
danli3()


console.log(true + 0);
console.log(true + false);
console.log(true + 'sss');
console.log(true + undefined);
console.log(0 + undefined);

var squareRoot = Math.sqrt(13);
console.log(squareRoot);

function isPrime(num){
    // 不是数字或者数字小于2
    if(typeof num !== "number" || !Number.isInteger(num)){　　　　　　// Number.isInterget 判断是否为整数
        return false;
    }

    //2是质数
    if(num == 2){
        return true; 
    }else if(num % 2 == 0){  //排除偶数
        return false;
    }
    //依次判断是否能被奇数整除，最大循环为数值的开方
    var squareRoot = Math.sqrt(num);
    //因为2已经验证过，所以从3开始；且已经排除偶数，所以每次加2
    for(var i = 3; i <= squareRoot; i += 2) {
      if (num % i === 0) {
         return false;
      }
    }
    return true;
}

console.log(isPrime(14));

function sum() {
    var x = 0;
    console.log('arguments', arguments, arguments.length);
    for (var i = 0; i < arguments.length; ++i) {
        x += arguments[i];
    }
    console.log('x', x);
    return x;
}
sum(5,6,7,8);

function format(string) {   

    var args = arguments;   
  

    var pattern = new RegExp('%([1-' + arguments.length + '])', "g");   
  console.log('pattern', pattern, arguments, arguments.length);
  for (let item of arguments){
console.log('item', item);
  }
    return String(string).replace(pattern, function(match, index) {   
  
      return args[index];   
  
    });   
  
  }; 

  console.log(format("And the %1 want to know whose %2 you %3", "papers", "shirt", "wear"));

  function forma(...string) {  
      console.log('string', string, string.length); 
  }

  forma('a', 'b', 'c', 'd');

