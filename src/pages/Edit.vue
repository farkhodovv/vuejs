<template>
  <div class="home">
    <card-info>
      <card-form action="edit" />
    </card-info>
  </div>
</template>

<script>
import cardInfo from '@/components/CardInfo.vue'
import CardForm from '@/components/CardForm.vue'

export default {
  components: { cardInfo, CardForm },
  name: 'EditCard',
}
</script>
