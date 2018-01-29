<template>
  <header class="navbar">
    <section class="navbar-section">
      <nuxt-link
        v-for="(item, index) in getMenuItems(name)"
        :key="index"
        :to="item.path"
        class="btn btn-link">
        {{ item.label }}
      </nuxt-link>
    </section>
  </header>
</template>

<script>
import { Component, Vue } from '~/vueclass';
import { mapGetters } from 'vuex';

@Component({
  props: {
    name: {
      type: String,
      default: 'main',
    },
  },
  computed: {
    ...mapGetters('menu', ['getMenuItems']),
  },
})
export default class Menu extends Vue {}
</script>
