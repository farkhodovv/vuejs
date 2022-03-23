<template>
  <div class="home">
    <card-info>
      <div class="card-info-inner">
        <div class="card-info-container">
          <div class="card-info-inputs">
            <input type="text" v-model="activeCard.title" class="title-input" placeholder="Title" />
            <input
              v-model="activeCard.description"
              type="text"
              class="description"
              placeholder="Description goes here"
            />
          </div>
          <div class="card-info-btns">
            <button class="save" @click="save">Save</button>
            <button class="delete" @click="deleteCard()">Delete</button>
          </div>
        </div>
      </div>
    </card-info>
  </div>
</template>

<script>
import cardInfo from '@/components/CardInfo.vue'

export default {
  components: { cardInfo },
  name: 'EditCard',
  data () {
    return {
      cards: [],
      activeCard: {}
    }
  },
  methods: {
    save() {
      this.cards.push(this.activeCard)
      this.cards = this.cards.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t.id === value.id
        ))
      )
      localStorage.setItem("cards", JSON.stringify(this.cards));
      this.$router.push('/')
    },
    deleteCard () {
      this.cards = this.cards.filter(card => {
        return card.id !== this.activeCard.id
      })
      localStorage.setItem("cards", JSON.stringify(this.cards));
      this.$router.push('/')
    }
  },
  created() {
     this.cards = JSON.parse(localStorage.getItem("cards") || '[]')
     this.activeCard = this.cards.find(i => i.id === this.$route.params.id) 
  }
}
</script>
