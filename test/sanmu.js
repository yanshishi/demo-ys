function test(data){
 let b = data === '/' ? '/': `${data}.html`;
 let c = `router.get('${b}')`;
 console.log(b);
 console.log(c);
 console.log("b",b);
}
   
   test('/');