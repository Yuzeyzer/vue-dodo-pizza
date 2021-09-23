import { createStore } from 'vuex'

export default createStore({
	state: {
		pizzas: [],
		category: null,
		sortBy: 'rating',
	},
	mutations: {
		GET_PIZZAS(state, pizzas) {
			state.pizzas = pizzas
		},
		SET_CATEGORY(state, categoryValue) {
			state.category = categoryValue
		},
		SET_SORT(state, value) {
      state.sortBy = value
    },
	},
	actions: {
		async getPizzasAPI({ commit }) {
			const response = await fetch('http://localhost:3000/pizzas')
			const pizzas = await response.json()
			commit('GET_PIZZAS', pizzas)
		},
		async getFilteredPizzas({ commit, state }, catIndex) {
			const response = await fetch(`http://localhost:3000/pizzas?category=${catIndex}`)
			const filteredPizzas = await response.json()
			state.pizzas = filteredPizzas
			commit('SET_CATEGORY', catIndex)
		},
		async setSortBy({ commit, state }, value) {
			const response = await fetch(`http://localhost:3000/pizzas?_sort=${value}&_order=asc`)
			const sortedPizzas = await response.json()
			state.pizzas = sortedPizzas
			commit('SET_SORT', value)
		},
	},
	modules: {},
})
