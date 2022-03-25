<template>
  <router-link class="add d-flex justify-center items-center" to="/add">
    <div class="img-wrapper">
      <img src="../assets/images/pluscard.png" alt="">
    </div>
  </router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.add {
  border: 1px dashed black;
  width: 278px;
  height: 278px;
  margin-right: 20px;

  .img-wrapper {
    width: 60px;
    height: 60px;
  }
}
</style>