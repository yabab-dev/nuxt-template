export default {
  namespaced: true,

  state: () => ({
    menus: {
      main: null,
    },
  }),

  mutations: {
    setMenuItems(state, { name, items }) {
      state.menus[name] = items;
    },
  },

  getters: {
    getMenuItems(state) {
      return name => state.menus[name];
    },
  },

  actions: {},
};
