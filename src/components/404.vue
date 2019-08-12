<template>
  <div class="no-page">
    <div class="pic-box">
      <img class="pic" src="../assets/images/404.png"/>
      <span class="num">{{currentTime}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "no-page",
    data(){
      return{
        currentTime: 5,
        timer: null
      };
    },
    created() {
      this.timer = setInterval(()=>{
        this.currentTime--;
        if(this.currentTime <= 0){
          clearInterval(this.timer);
          this.$router.go(-1);
        }
      },1000);
    },
    destroyed() {
      clearInterval(this.timer);
    }
  };
</script>

<style scoped lang="scss">
.no-page{
  .pic-box{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -255px;
    margin-top: -211px;
    width: 510px;
    height: 422px;
    img{
      width: 510px;
      height: 422px;
    }
    .num{
      font-size: 18px;
      position: absolute;
      left: 338px;
      top: 175px;
      color: red;
    }
  }
}
</style>
