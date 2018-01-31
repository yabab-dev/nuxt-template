import { asyncAppComponent } from '~/vueclass';

export default [
  {
    path: '/',
    component: asyncAppComponent('home/HomePage'),
  },
];
