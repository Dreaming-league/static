define(['jquery','vue','vue-router'],function($,Vue,VueRouter){
  Vue.use(VueRouter);
  console.log(Vue);
  console.log(VueRouter);
  console.log('sub.js文件加载了');

  var  file = {
    template: '<h1>file</h1>'
  }
  var img = {
    template:'<h1>img</h1>'
  }
  console.log(document.querySelector('#role').innerHTML)
  var role = {
    template:document.querySelector('#role').innerHTML
  }

  // 路由需要一个根组件
  // 演示的目的 这里使用一个空组件
  // 因为使用HTML作为app的模板
  var App  = {};
  var  router = new VueRouter();

  router.map({
    '/file':{
      component: file
    },
    '/img': {
      component: img,
    },
    '/role': {
      component: role,
      subRoutes: {
        '/': {
           component: {
             template:document.querySelector('#userTab').innerHTML,
          }
        },
        '/user': {
          component: {
             template:document.querySelector('#userTab').innerHTML,
          }
        }
      }
    }
  })
  // 不匹配的路由都返回到role
  router.redirect({
    '*':'/role',
    // "/role":'/role/user'
  });


  $('.ui.sidebar').sidebar({
      'context':'.main'
  })
  router.start(App,'#app');
});
