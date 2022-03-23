<template>
  <div>
    <nav>
      <h1>Card List</h1>
    </nav>
    <div class="cards-wrapper">
      <router-link class="card add" to="/Add">
        <div class="img-wrapper">
          <img src="../assets/pluscard.png" alt="">
        </div>
      </router-link>
      <Card v-for="card in cards" :key="card.id" :card="card" @like="liked" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'IndexPage',
  components: {
    Card
  },
  data () {
    return {
      cards: []
    }
  },
  created() {
    this.cards = JSON.parse(localStorage.getItem("cards") || '[]')
  },
  methods: {
    liked (card) {
      card.liked = !card.liked
      localStorage.setItem("cards", JSON.stringify(this.cards));
    }
  }
}
</script>