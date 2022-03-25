<template>
  <v-page> 
    <div class="container">
      <nav>
        <h1>Card List</h1>
      </nav>
      <div class="d-flex flex-wrap">
        <add-card />
        <Card v-for="card in cards" :key="card.id" :card="card" @like="changeStatus" />
      </div>
    </div>
  </v-page>
</template>

<script>
import Card from '@/components/Card.vue'
import VPage from '@/components/V-page.vue'
import initialCards from '@/common/cards'
import AddCard from '@/components/AddCard.vue'
import { CardService } from '@/helpers/MainMethods';

export default {
  name: 'IndexPage',
  components: {
    Card,
    VPage,
    AddCard
  },
  data () {
    return {
      cards: []
    }
  },
  created() {
    this.cards = initialCards
  },
  methods: {
    changeStatus (card) {
      console.log('card :>> ', card);
      this.cards = CardService.likeCard(card)
      console.log(this.cards);
    }
  }
}
</script>