<template>
  <div>
    <appNav />
    <Nuxt />
    <app-footer />
  </div>
</template>

<script>
import appNav from "@/components/appNav.vue";
import appHeader from "@/components/appHeader.vue";
import AppHeader from "../components/appHeader.vue";
import appFooter from "@/components/appFooter.vue";
export default {
  components: {
    appNav,
    appFooter,
  },
};
</script>

<style lang="scss" scoped></style>
