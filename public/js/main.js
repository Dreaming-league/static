// main.js作为主入口文件
requirejs.config({
  // 所有的子模块从这个路径中查找
  baseUrl:'js/vender',
  // 如果以app开始的摸块则从 当前的baseUrl与../app路径结合 得到的路径去寻找模快
  paths: {
    app:'../app'
  }
})
requirejs(['jquery','vue','app/sub','semantic'],function($,Vue,sub){
    $('.ui.rating').rating({
      initialRating: 3,
      maxRating: 5
    })
    // 导航栏的点击事件
    /*$('.head a.item:not(:first)').on('click',function() {
      $('a.item').removeClass('active');
      $(this).addClass('active');
      console.log($(this).attr('data-index'));
      var index = $(this).attr('data-index');
      $('#list li').eq(index).addClass('active').siblings('li').removeClass('active');
    });
    $('.sidebar a.item').on('click',function() {
      var  index = $(this).index();
      $('#list li').eq(index).addClass('active').siblings('li').removeClass('active');
    });*/
  // 侧边栏
  $('.ui.sidebar').sidebar('attach events', '.toc.item');
  // 用户hover下拉
  $('#user').dropdown({
    on: 'hover'
  })
})
