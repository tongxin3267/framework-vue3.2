<template>
  <div class="login">
    <div class="login-header">登录头部</div>
    <div class="login-body">登录内容</div>
    <div class="login-footer">登录底部</div>
  </div>
</template>

<script>
  import {testApiService} from 'src/api/indexApi';
export default {
  name: "login",
  created() {
    console.log('window.VUE_APP_Test_API',window.VUE_APP_Test_API);
    testApiService().then(()=>{});
  }
};
</script>

<style scoped>
.login{
  border-radius: 10px;
  height: 456px;
  width: 486px;
  position: absolute;
  background-color: #fff;
  left: 60%;
  top: 30%;
}
</style>
