/* eslint-disable */

import Vue from 'vue';
import Component from 'nuxt-class-component';

export { Vue };
export { Component };
export * from 'vue-property-decorator';
export * from 'vuex-class';

export const asyncAppComponent = filepath => {
  return () => import(`~/app/${filepath}`).then(m => m.default);
};
