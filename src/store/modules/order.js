import { getOrderList } from 'api/order'
export default {
  namespaced: true,
  state: {
    orderList: [],
  },
  getters: {
    processing: state =>
      state.orderList.filter(
        order => order.status.code === 1 || order.status.code === 2
      ),
    done: state =>
      state.orderList.filter(
        order => order.status.code === 3 || order.status.code === 4
      ),
  },
  mutations: {
    SET_ORDERS(state, { data }) {
      state.orderList = data.order
    },
  },
  actions: {
    async getAllOrder({ commit }) {
      commit('SET_ORDERS', await getOrderList())
    },
  },
}
