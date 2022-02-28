<template>
  <div>
    <section class="restaurantinfo">
      <h1>Restaurants</h1>

      <select-restaurant @change="selectRestaurant = $event" />
    </section>
    <app-restaurant-items :foodSource="filterFoodData" />
  </div>
</template>

<script>
import appRestaurantItems from "@/components/appRestaurantItems.vue";
import AppRestaurantItems from "../components/appRestaurantItems.vue";
import selectRestaurant from "@/components/selectRestaurant.vue";
import { mapState } from "vuex";

export default {
  layout: "defult",
  data() {
    return {
      selectRestaurant: "",
    };
  },

  components: {
    AppRestaurantItems,
  },

  computed: {
    ...mapState(["fooddata"]),
    filterFoodData() {
      if (selectRestaurant) {
        return this.fooddata.filter((el) => {
          let name = el.name.toLowerCase();
          return name.includes(this.selectRestaurant);
        });
      }
      return this.fooddata;
    },
  },
};
</script>

<style lang="scss" scoped></style>
