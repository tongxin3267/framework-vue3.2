<template>
  <div class="account">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "account",
  created() {
  }
};
</script>

<style scoped>
.account{
  background: #ebebeb;
  width: 100%;
  height: 100vh;
  position: relative;
  left: 0;
  top: 0;
}
</style>