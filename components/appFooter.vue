<template>
  <div>
    <footer>
      <p>Powered By Mohamed Omara</p>
      <a href="https://www.linkedin.com/in/mohamed-said-omara">
        <img src="/linkedin.png" alt="" />
      </a>
      <a href="https://github.com/MohamedOmara-cse/Nuxt-Food-App">
        <img src="/github.png" alt="" />
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
footer {
  width: 85%;
  margin: auto;

  height: 25px;

  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  background: #35383a;
}
p {
  color: white;
}
a {
  padding-left: 15px;
}
img {
  width: 30px;
  height: 30px;
}
</style>
base
