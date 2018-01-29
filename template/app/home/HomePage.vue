<template>
  <div class="page index-page">
    <h1>Home Page</h1>

    <div>
      Data: {{ compData }}<br>

      <button
        class="btn"
        @click="onClick()">
        Click me
      </button>
    </div>

  </div>
</template>

<script>
import { Component, Vue } from '~/vueclass';

@Component({
  head() {
    return {
      title: 'Accueil',
    };
  },
})
export default class HomePage extends Vue {
  compData = 'Nuxt template';

  onClick() {
    alert('Button clicked');
  }
}
</script>
