<template>
  <div class="card">
    <h1>{{ card.title }}</h1>
    <p>{{ card.description }}</p>
    <div class="card-bottom">
      <button @click="$router.push(`${card.id}/edit`)">edit</button>
      <button :class="{liked : card.liked}" @click="$emit('like', card)">like</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SingleCard',
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    width: 278px;
    height: 278px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    margin-right: 20px;
    margin-bottom: 20px;

    &-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      margin-top: 20px;

      span {
        border: 1px solid black;
        padding: 5px;
      }

      span:first-child {
        border: 1px solid gray;
      }

      .liked {
        background: red;
        color: white;
      }
    }

    img {
      width: 30px;
      height: 30px;
    }
  }
</style>