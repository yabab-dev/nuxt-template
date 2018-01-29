/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';
import routes from '~/app/routes';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [...routes],
  });
}
