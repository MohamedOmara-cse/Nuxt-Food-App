<template>
  <nav>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/restaurant">Restaurant</nuxt-link></li>

      <li style="float: right; padding: 0px">
        <button @click="changeMode" id="dark-mode">
          <img src="/night-mode.png" alt="night" />
        </button>
      </li>
      <li style="float: right">
        <n-link to="/cart"> Cart</n-link>
      </li>
    </ul>
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
  width: 100%;
}
img {
  width: 10px;
  height: 10px;
}
#cart {
  float: right;
  width: fit-content;
}
#dark-mode {
  width: 30px;
  height: 30px;

  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;

  padding: 5px;
}
</style>
