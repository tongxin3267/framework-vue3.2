/*
*  路由拦截配置文件
* */
import router from 'src/views/front/router/router';
router.beforeEach((to, from, next) => {
  var custToken = sessionStorage.getItem('custToken');
  console.log(custToken);
  console.log(to);
  console.log(from);
  console.log(next());
});
router.afterEach((to, from, next) => {
  var custToken = sessionStorage.getItem('custToken');
  console.log(custToken);
  console.log(to);
  console.log(from);
  console.log(next());
});
