<template>
  <section class="restaurantinfo">
    <div v-for="category in foodSource" :key="category.id">
      <h2>{{ category.name }}</h2>
      <h3>Delivery Time : {{ category.deliveryTime }} min</h3>
      <h3>rating : {{ category.rating }} / 5</h3>

      <div class="row">
        <div
          v-for="item in category.menu"
          :key="`${item.id}`"
          :class="'items'"
          :style="`background :url(${item.img}) no-repeat center center`"
        >
          <div class="iteminfo">
            <div>
              <p>{{ item.item }}</p>
              <p>${{ item.price }}</p>
            </div>
            <div class="ghost">
              <nuxt-link :to="`/items/${item.id}`">
                <button>View Item></button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    foodSource: {
      type: [Array, Object],
    },
  },
};
</script>

<style lang="scss" scoped>
.foo {
}
</style>
