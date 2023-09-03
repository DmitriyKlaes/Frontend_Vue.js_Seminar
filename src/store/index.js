import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    cartItems: [],
    data: [],
  },
  getters: {
    cartItems: (state) => state.cartItems,
    totalCartItems: (state) => state.cartItems.length,
    totalCartPrice: (state) => state.cartItems.reduce((total, item)=> total + item.price, 0),
  },
  mutations: {
    INCREMENT (state) {
      state.counter++;
    },
    DECREMENT (state) {
      state.counter--;
    },
    ADD_ITEM_TO_CART (state, item) {
      state.cartItems.push(item);
    },
    GET_DATA (state, data) {
      state.data = data;
    }
  },
  actions: {
    // addItemToCart(context, item) {
    //   context.commit('ADD_ITEM_TO_CART', item)
    // }
    addItemToCart({commit}, item) {
      commit('ADD_ITEM_TO_CART', item)
    },
    fetchData({commit}) {
      setTimeout(() => {
        const dataFromServer = ['data1', 'data1', 'data1'];
        commit('GET_DATA', dataFromServer);       
      }, 2000)
    }
  },
  modules: {
  }
})
