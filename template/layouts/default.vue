<template>
  <div class="layout default-layout">
    <Menu/>
    <nuxt/>
  </div>
</template>

<script>
import { Component, Vue } from '~/vueclass';
import Menu from '~/app/menu/Menu';

@Component({
  components: {
    Menu,
  },
})
export default class DefaultLayout extends Vue {}
</script>
