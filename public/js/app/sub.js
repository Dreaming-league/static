define(['jquery'],function($){
  var subA = '123';
  console.log('sub.js文件加载了');
  function P(){
    this.sayHello = function(str){
        alert(str);
    }
  }
  return P;
});
