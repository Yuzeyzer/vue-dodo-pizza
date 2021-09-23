<template>
	<ul>
		<li
			v-for="(item, index) in pizzaSizes"
			:key="item"
			:class="{
				active: activePizzaSize === index && sizes.includes(item),
				disabled: !sizes.includes(item),
			}"
			@click="setAcivePizzaSize(index)"
		>
			{{ item }} см
		</li>
	</ul>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
	props: ["sizes"],
	setup(props) {
		const { sizes } = props;
		const pizzaSizes = ref([26, 30, 40]);

		const activePizzaSize = ref(0);

		if (sizes[0] !== pizzaSizes[0]) {
			activePizzaSize.value = pizzaSizes.value.findIndex(
				(item) => item === sizes[0]
			);
		}

		const setAcivePizzaSize = (index) => {
			activePizzaSize.value = index;
		};

		return {
			pizzaSizes,
			activePizzaSize,
			setAcivePizzaSize,
			sizes,
		};
	},
};
</script>

<style>
</style>