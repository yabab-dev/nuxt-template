<template>
  <div class="page error-page">
    <h1 v-if="error.statusCode === 404">Page non trouvée</h1>
    <h1 v-else>Une erreur est survenue</h1>

    <div
      class="error-content"
      v-if="error.statusCode !== 404 && error.message">
      {{ error.message }}
    </div>

    <nuxt-link to="/">Retour à l'accueil</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from '~/vueclass';

@Component()
export default class ErrorLayout extends Vue {
  @Prop() error: any;

  layout = 'default';
}
</script>
