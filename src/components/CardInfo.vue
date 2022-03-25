<template>
  <div class="card-info">
    <h1 class="card-info-title">{{ currentRoute === 'create-card' ? 'Create' : 'Card Info' }}</h1>
    <slot />
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentRoute: ''
    }
  },
  watch: {
  $route: {
    immediate: true,
    handler (value) {
      this.currentRoute = value.name
    }
  }
}
};
</script>

<style>
.card-info-title {
  text-align: center;
  font-size: 30px;
  font-family: roboto;
  font-weight: 700;
  margin-top: 45px;
}
</style>