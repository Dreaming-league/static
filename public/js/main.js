// main.js作为主入口文件
requirejs.config({
  // 所有的子模块从这个路径中查找
  baseUrl:'js/vender',
  // 如果以app开始的摸块则从 当前的baseUrl与../app路径结合 得到的路径去寻找模快
  paths: {
    app:'../app'
  }
})
requirejs(['jquery','vue','app/sub'],function($,Vue,sub){
  // jqery 2.1.4  bootstrap 3.3
  // bootstrap 依赖jq
  console.log($)
  require(['bootstrap']);
  console.log(sub);
  var person = new sub();
  person.sayHello('hello');
})
