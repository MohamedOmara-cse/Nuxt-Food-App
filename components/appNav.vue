<template>
  <nav>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/resturant">resturant</nuxt-link></li>
    </ul>

    <button @click="darkMode" id="dark-mode">
      <img src="/night-mode.png" alt="night" />
    </button>
  </nav>
</template>

<script>
export default {
  components: {},
  methods: {
    darkMode() {
      document.querySelector("body").classList.toggle("dark-mode");
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  width: 1000px;
}
img {
  width: 15px;
  height: 15px;
}

#dark-mode {
  float: right;
  border-radius: 50px;
}
</style>
