<template>
  <header
    class="navbar menu"
    :class="`menu-${name}`">

    <section class="navbar-section">
      <nuxt-link
        v-for="(item, index) in getItems(name)"
        :key="index"
        :to="item.path"
        class="btn btn-link">
        {{ item.label }}
      </nuxt-link>
    </section>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop, namespace, Getter } from '~/vueclass';
const MenuGetters = namespace('menu', Getter);

@Component()
export default class Menu extends Vue {
  @Prop({ default: 'main' })
  name: string;

  @MenuGetters('getMenuItems') getItems;
}
</script>
