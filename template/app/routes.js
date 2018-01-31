const HomePage = () => import('./home/HomePage').then(r => r.default);

export default [
  {
    path: '/',
    component: HomePage,
  },
];
