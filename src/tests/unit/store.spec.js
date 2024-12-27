import { createStore } from 'vuex';
import storeConfig from '@/store';

describe('Vuex Store', () => {
  let store;

  beforeEach(() => {
    store = createStore(storeConfig);
  });

  test('Valor inicial del contador', () => {
    expect(store.state.contador).toBe(0);
  });

  test('Incrementar contador', () => {
    store.commit('incrementar');
    expect(store.state.contador).toBe(1);
  });

  test('Decrementar contador', () => {
    store.commit('decrementar');
    expect(store.state.contador).toBe(-1);
  });
});