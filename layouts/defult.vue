<template>
  <div>
    <div>
      <appNav />
      <Nuxt />
      <app-footer class="footerDiv" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import appNav from "@/components/appNav.vue";
import appHeader from "@/components/appHeader.vue";
import AppHeader from "../components/appHeader.vue";
import appFooter from "@/components/appFooter.vue";
import AppFooter from "../components/appFooter.vue";
export default {
  components: {
    appNav,

    AppFooter,
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
.footerDiv {
  position: relative;
  width: 100%;
  bottom: 0;
}
</style>
