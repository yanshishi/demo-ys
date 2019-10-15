function find(str,cha,num){
    var x=str.indexOf(cha);
    for(var i=0;i<num;i++){
        x=str.indexOf(cha,x+1);
    }
    return x;
}
const html = '<p>abcdrfg</p><p>abcdrfg</p>'
var count = find(html, '<p>', 2);

var result = html.substring(3,html.indexOf('</p>')).substring(0, 2);
console.log(count );
console.log(result);
console.log(html.indexOf('</p>'));