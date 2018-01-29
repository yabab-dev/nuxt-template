import MenuStore from './menu/store';

export default async ({ store, client }) => {
  store.registerModule('menu', MenuStore, client ? { preserveState: true } : {});
};
