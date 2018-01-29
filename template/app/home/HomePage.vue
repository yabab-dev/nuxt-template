<template>
  <div class="page index-page">
    <h1>Home Page</h1>
  </div>
</template>

<script>
import { Component, Vue } from '~/vueclass';

@Component()
export default class HomePage extends Vue {
  head() {
    return {
      title: 'Home',
    };
  }
}
</script>
