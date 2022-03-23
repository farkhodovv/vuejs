<template>
  <div>
    <div class="card">
      <h1>{{ card.title }}</h1>
      <p>{{ card.description }}</p>
      <div class="card-bottom">
        <button @click="$router.push(`${card.id}`)">edit</button>
        <button :class="{liked : card.liked}" @click="$emit('like', card)">like</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SinglCard',
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>