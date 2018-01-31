<template>
  <div class="page error-page">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>Sorry, there is an error here!</h1>

    <div
      class="error-content"
      v-if="error.statusCode !== 404 && error.message">
      {{ error.message }}
    </div>

    <nuxt-link to="/">Back to home</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from '~/vueclass';

@Component()
export default class ErrorLayout extends Vue {
  @Prop() error: any;

  layout = 'default';

  head() {
    return {
      title: 'Error page',
    };
  }
}
</script>
