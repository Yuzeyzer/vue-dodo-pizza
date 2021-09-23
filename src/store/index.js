import { createStore } from 'vuex'

export default createStore({
	state: {
		pizzas: [],
    category: null
	},
	mutations: {
		GET_PIZZAS(state, { pizzas }) {
			state.pizzas = [...state.pizzas, ...pizzas]
		},
    SET_CATEGORY(state,categoryValue) {
      state.category = categoryValue
    }
	},
	actions: {
		async getPizzasAPI({ commit }) {
			const response = await fetch('http://localhost:3000/db.json')
			const pizzas = await response.json()
			commit('GET_PIZZAS', pizzas)
		},
	},
	modules: {},
})
