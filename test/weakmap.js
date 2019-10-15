/**
 * Created by Administrator on 2017/10/15.
 */

var wm  = new WeakMap();
var obj = new Object();
wm.set( obj  , '对象1');

//wm.delete(obj);
obj = null ;
console.log(wm.get( obj ));
console.log(wm.has( obj ));

