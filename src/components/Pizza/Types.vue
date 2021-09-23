<template>
	<ul>
		<li
			v-for="(item, index) in pizzaTypes"
			:key="item"
			:class="{
				active: activePizzaType === index,
				disabled: !types.includes(index),
			}"
			@click="setAcivePizzaType(index)"
		>
			{{ item }}
		</li>
	</ul>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
	props: ["types"],
	setup(props) {
		const { types } = props;

		const pizzaTypes = ref(["Тонкое", "Традиционное"]);

		const activePizzaType = ref(0);

		if (types.length < 2) {
			activePizzaType.value = types[0];
		}

		const setAcivePizzaType = (index) => {
			activePizzaType.value = index;
		};

		return {
			pizzaTypes,
			activePizzaType,
			setAcivePizzaType,
      types
		};
	},
};
</script>

<style>
</style>