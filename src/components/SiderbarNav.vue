<template>
  <q-item
    clickable
    :to="link"
    exact: true
    :active="active" 
    exact
    active-class="text-positive"
  >
    <q-item-section v-if="icon" avatar>
      <img :src="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'SiderbarNav',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      link: 'card',
      active: true
    }
  }
}
</script>
