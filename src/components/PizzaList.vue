<template>
	<h2 class="content__title">Все пиццы</h2>
	<div class="content__items">
		<PizzaItem />
		<PizzaItem />
		<PizzaItem />
		<PizzaItem />
		<PizzaItem />
		<PizzaItem />
		<PizzaItem />
		<PizzaItem />
		<PizzaItem />
		<PizzaItem />
		<PizzaItem />
		<PizzaItem />
	</div>
</template>

<script>
import PizzaItem from "./SinglePizza.vue";
export default {
	components: { PizzaItem },
};
</script>

<style lang="scss">
</style>