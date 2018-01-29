export const state = () => {};

export const mutations = {};

export const actions = {
  async nuxtServerInit({ commit }) {
    commit('menu/setMenuItems', {
      name: 'main',
      items: [
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'Menu Item',
          path: '/item',
        },
      ],
    });
  },
};
