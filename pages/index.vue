<template>
<main class="container">
<app-header/>
<app-restaurant-items />

</main>
</template>

<script>
import appNav from '@/components/appNav.vue';
import AppHeader from '../components/appHeader.vue';
import appRestaurantItems from '@/components/appRestaurantItems.vue';
export default {
  components: {
    AppHeader,appRestaurantItems
  },
}
</script>
