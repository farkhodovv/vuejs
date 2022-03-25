<template>
	<div class="card-info__form">
		<div class="card-info__inputs">
			<input type="text" v-model="activeCard.title" class="title-input" placeholder="Title" />
			<input
				v-model="activeCard.description"
				type="text"
				class="description"
				placeholder="Description goes here"
			/>
		</div>
		<div class="card-info__buttons">
			<button class="save" @click="save">Save</button>
			<button v-if="action === 'edit'" class="delete" @click="deleteCard">Delete</button>
		</div>
	</div>
</template>

<script>
import { CardService } from '@/helpers/MainMethods';
import cards from '@/common/cards'

export default {
  name: 'CardForm',
  props: {
    action: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      activeCard: {
        title: '',
        description: '',
        createdAt: new Date(),
        liked: false,
        id: "id" + Math.random().toString(16).slice(2)
			}
    }
  },
  methods: {
    save () {
      switch (this.action) {
        case 'create': 
          CardService.addToList(this.activeCard)
          break
        case 'edit':
          CardService.editCard(this.activeCard)
          break
      }

      this.$router.push('/')
    },
    deleteCard () {
      CardService.deleteCard(this.activeCard.id)
      this.$router.push('/')
    }
  },
  created() {
		if (this.action === 'edit' && cards && cards.length) {
			this.activeCard = cards.find(i => i.id === this.$route.params.id)
		}
  }
}
</script>

<style>

</style>