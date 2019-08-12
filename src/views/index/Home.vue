<template>
  <div class="home">
    <div class="container-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
  .home{
    width: 100%;
    height: 100%;
  }
</style>