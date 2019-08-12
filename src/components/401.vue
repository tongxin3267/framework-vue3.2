<template>
  <div class="no-jurisdiction">
    <div class="pic-box">
      <img class="pic" src="../assets/images/401.png"/>
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
          console.log(this.currentTime);
          this.$router.go(-2);
          clearInterval(this.timer);
        }
      },1000);
    },
    destroyed() {
      clearInterval(this.timer);
    }
  };
</script>

<style scoped lang="scss">
  .no-jurisdiction{
    .pic-box{
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -255px;
      margin-top: -291px;
      width: 510px;
      height: 581px;
      img{
        width: 510px;
        height: 581px;
      }
      .num{
        font-size: 18px;
        position: absolute;
        left: 251px;
        bottom: 27px;
        color: red;
      }
    }
  }
</style>