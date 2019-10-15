// class aa{
//   getPropBindMap() {
//     return null;
//   }
//
// const bindMap = this._getPropBindMap();
// const originName = bindMap[bindValue];
//
// console.log(originName);
// }
class Person{
   constructor(originName , bindMap){
       this.originName = originName ;
       this.bindMap = bindMap;
   }
  _getPropBindMap(  ){
       return null;
   }
   sayName(){
     const bindMap = this._getPropBindMap();
      const originName = bindMap["innerText"];
       console.log(this.originName);
   }

}
let bb = new Person();
bb.sayName()