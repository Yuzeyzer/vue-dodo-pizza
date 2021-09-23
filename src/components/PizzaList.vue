<template>
	<h2 class="content__title">Все пиццы</h2>
	<div class="content__items">
		<PizzaItem v-for="pizza in pizzas" :key="pizza.id" :pizza="pizza" />
	</div>
</template>

<script>
import PizzaItem from "./SinglePizza.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
	components: { PizzaItem },
	setup() {
		const store = useStore();

		onMounted(() => store.dispatch("getPizzasAPI"));

		const pizzas = computed(() => store.state.pizzas);

		return { pizzas };
	},
};
</script>

<style lang="scss">
</style>