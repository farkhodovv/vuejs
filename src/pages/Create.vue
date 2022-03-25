<template>
  <div class="add">
    <card-info>
      <card-form action="create" />
    </card-info>
  </div>
</template>

<script>
import cardInfo from '@/components/CardInfo.vue'
import CardForm from '@/components/CardForm.vue'

export default {
  components: { cardInfo, CardForm },
  name: 'CreateCard'
}
</script>
