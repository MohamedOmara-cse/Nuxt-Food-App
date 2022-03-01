<template>
  <div>
    <div>
      <appNav />
      <Nuxt />
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import appNav from "@/components/appNav.vue";
import appHeader from "@/components/appHeader.vue";
import AppHeader from "../components/appHeader.vue";
import appFooter from "@/components/appFooter.vue";
export default {
  components: {
    appNav,
    appFooter,
  },
  computed: {
    ...mapState(["mode"]),
  },
  watch: {
    mode: function () {
      document.querySelector("body").classList.toggle("dark-mode");
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  width: 80%;
  margin: auto;
}
</style>
