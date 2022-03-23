<template>
  <div>
    <div class="card-info">
      <h1 class="card-info-title">{{ currentRoute === 'Add' ? 'Create' : 'Card Info' }}</h1>
      <slot />
    </div>
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

.card-info-inner {
  margin: auto;
  width: 300px;
  margin-top: 50px;
  background: #b2beb5;
  height: 300px;
  margin-bottom: 50px;
  padding: 25px;
}

.card-info-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title-input {
  padding: 10px 20px;
}

.description {
  margin-top: 10px;
  padding-bottom: 50px;
}

.card-info-btns {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.save {
  padding: 10px 30px;
  border-radius: 10px;
  cursor: pointer;
}

.delete {
  padding: 10px 30px;
  border-radius: 10px;
  background-color: inherit;
  cursor: pointer;
}
</style>