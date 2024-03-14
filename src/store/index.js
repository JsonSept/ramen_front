import { createStore } from 'vuex'
import axios from 'axios'
import bootstrap from 'bootstrap'
const baseUrl = 'http://localhost:8070'


export default createStore({
  state: {
    products:null,
    users:null
   
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProduct(state) {
      return state.products;
    },
    getUsers(state) {
      return state.users
    }
  },
  mutations: {
    setProducts(state,payload) {
      state.products = payload
    },
    setProduct(state,payload) {
      state.products = payload
    },
    setUsers(state,payload) {
      state.users = payload
    },
    
  },
  actions: {
  async getProducts({commit}){
    let {data} = await axios.get(baseUrl+ '/products')
    commit('setProducts' , data)
  },
  async getProduct({commit}){
    let {data} = await axios.get(baseUrl+ '/products')
    commit('setProduct' , data)
  },
async getUsers({commit}){
  let {data} = await axios.get(baseUrl+'/users')
  commit('setUsers', data)
}
  },
  modules: {
  }
})
