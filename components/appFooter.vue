<template>
  <div>
    <ul>
      <li>
        <h5>Powered By Mohamed Omara</h5>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/mohamed-said-omara">
          <img src="/linkedin.png" alt="" />
        </a>
      </li>

      <li>
        <a href="https://github.com/MohamedOmara-cse/Nuxt-Food-App">
          <img src="/github.png" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
footer {
  margin: auto;

  height: 25px;

  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  background: #35383a;
}
ul {
  h5 {
    margin: 0;
  }
  padding: 5px 5px;
  background: #082c40;
  color: white;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
}
p {
  color: white;
}
a {
  margin-left: 15px;
}
img {
  width: 30px;
  height: 30px;
}
</style>
base
