<template>
  <div class="add">
    <card-info>
      <div class="card-info-inner">
        <div class="card-info-container">
          <div class="card-info-inputs">
            <input type="text" class="title-input" v-model="card.title" placeholder="Title" />
            <input
              v-model="card.description"
              type="text"
              class="description"
              placeholder="Description goes here"
            />
          </div>
          <div class="card-info-btns">
            <button @click="save" class="save">Save</button>
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
  name: 'CreateCard',
  data () {
    return {
      cards: [],
      card: {
        title: '',
        description: '',
        createdAt: new Date(),
        liked: false,
        id: "id" + Math.random().toString(16).slice(2)
      }
    }
  },
  methods: {
    save() {
      this.cards.push(this.card)
      localStorage.setItem("cards", JSON.stringify(this.cards));
      this.$router.push('/')
    }
  },
  created() {
     this.cards = JSON.parse(localStorage.getItem("cards") || '[]')
  },
}
</script>
