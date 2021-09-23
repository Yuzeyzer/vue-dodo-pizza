<template>
	<div class="categories">
		<ul>
			<li
				@click="handleClickNullCategory"
				:class="{ active: storeCategory === null }"
			>
				Все
			</li>
			<li
				:class="{ active: i === storeCategory }"
				v-for="(item, i) in categoriesItems"
				:key="item"
				@click="handleActiveItem(i)"
			>
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
	setup() {
		const store = useStore();
		const storeCategory = computed(() => store.state.category);

		const activeItem = ref(null);
		const categoriesItems = ref([
			"Мясные",
			"Вегетарианская",
			"Гриль",
			"Острые",
			"Закрытые",
		]);

		const handleActiveItem = (i) => {
			store.dispatch("getFilteredPizzas", i);
			store.commit("SET_SORT", "rating");
		};

		const handleClickNullCategory = () => {
			store.dispatch("getPizzasAPI");
			store.commit("SET_SORT", "rating");
		};

		return {
			categoriesItems,
			handleActiveItem,
			storeCategory,
			handleClickNullCategory,
		};
	},
};
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
.categories {
	ul {
		display: flex;

		li {
			background-color: #f9f9f9;
			padding: 13px 30px;
			border-radius: 30px;
			margin-right: 10px;
			font-weight: bold;
			cursor: pointer;
			transition: background-color 0.1s ease-in-out;
			@include noselect();

			&:hover {
				background-color: darken(#f9f9f9, 2%);
			}

			&:active {
				background-color: darken(#f9f9f9, 5%);
			}

			&.active {
				background-color: #282828;
				color: #fff;
			}
		}
	}
}
</style>