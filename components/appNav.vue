<template>
  <nav>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
    </ul>
    <ul id="cart">
      <li><n-link to="/cart"> Cart</n-link></li>
    </ul>
    <button @click="changeMode" id="dark-mode">
      <img src="/night-mode.png" alt="night" />
    </button>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations([
      "changeMode", //also supports payload `this.nameOfMutation(amount)`
    ]),
  },
};
</script>

<style lang="scss" scoped>
ul {
  width: 90%;
}
img {
  width: 15px;
  height: 15px;
}
#cart {
  float: right;
  width: fit-content;
}
#dark-mode {
  float: right;
  border-radius: 50px;
}
</style>
