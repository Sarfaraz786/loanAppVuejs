<template>
  <q-card class="card-option shadow-0 q-mb-md border-radius-8 bg-cgrey">
    <q-card-section>
      <div class="flex justify-between align-center">
        <div class="option-icon cursor-pointer"><img class="q-mb-xs" src="~/assets/freeze-card.svg" /><div class="font-size-13">Freeze card</div></div>
        <div class="option-icon cursor-pointer"><img class="q-mb-xs" src="~assets/set-spend-limit.svg" /><div class="font-size-13">Set spend limit</div></div>
        <div class="option-icon cursor-pointer"><img class="q-mb-xs" src="~assets/gpay.svg" /><div class="font-size-13">Add to GPay</div></div>
        <div class="option-icon cursor-pointer"><img class="q-mb-xs" src="~assets/replace-card.svg" /><div class="font-size-13">Replace card</div></div>
        <div class="option-icon cursor-pointer"><img class="q-mb-xs" src="~assets/cancel-card.svg" /><div class="font-size-13">Cancel card</div></div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'CardOption',
  data () {
    return {
    }
  }
}
</script>
