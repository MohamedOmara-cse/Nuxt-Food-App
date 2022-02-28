<template>
<main class="container">
<app-header/>
<app-restaurant-items :foodSource="fooddata"/>

</main>
</template>

<script>
import appNav from '@/components/appNav.vue';
import AppHeader from '../components/appHeader.vue';
import appRestaurantItems from '@/components/appRestaurantItems.vue';
import { mapState } from 'vuex';

export default {
   layout: "defult",
  components: {
    AppHeader,appRestaurantItems
  },
  computed: {
    ...mapState([
      'fooddata',
    ])
  },
}
</script>
