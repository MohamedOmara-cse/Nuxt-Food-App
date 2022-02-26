<template>
 <section class="restaurantinfo">

  <div v-for="category in fooddata" :key="category.id">
    <h2>{{category.name}}</h2>
    <p>Delivery Time : {{category.deliveryTime}} min</p>
    <p>rating : {{category.rating}} / 5</p>

     <div class="row">

      <div
      v-for="item in category.menu"
      :key="`${item.id}`"
      :class="'items'"
      :style="`background :url(${item.img}) no-repeat center center`"
      >
     <div class="iteminfo">
       <div>
      <p>{{item.item}}</p>
      <p>${{item.price}}</p>
       </div>
    <div class="ghost">
      <button>View Item></button>
     </div>
    </div>
    </div>
    </div>

</div>
 </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['fooddata'])
  },

};

</script>

<style lang="scss" scoped>
.foo{

}

</style>
