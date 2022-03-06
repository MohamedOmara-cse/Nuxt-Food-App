<template>
  <div class="container">
    <div class="description">
      <img :src="`/${currentItem.img}`" alt="food" />
      <div class="descriptionDetails">
        <h2>Description :</h2>
        <h4>{{ currentItem.description }}</h4>
      </div>
    </div>
    <div>
      <div>
        <h3>{{ currentItem.item }}</h3>
        <h5>Price: ${{ currentItem.price }}</h5>
      </div>
      <fieldset>
        <legend>
          <h3>Add Ons</h3>
        </legend>
        <div v-for="one in currentItem.addOns" :key="one">
          <input type="checkbox" :value="one" v-model="addOns" />
          <label :for="one">{{ one }}</label>
        </div>
      </fieldset>
      <fieldset v-if="currentItem.options">
        <legend>
          <h3>Add Options</h3>
        </legend>
        <div v-for="option in currentItem.options" :key="option">
          <input type="radio" :value="option" v-model="addOptions" />
          <label :for="option">{{ option }}</label>
        </div>
      </fieldset>
    </div>
    <div>
      <input
        type="number"
        min="1"
        name="numberOfPieces"
        id="numberOfPieces"
        placeholder="1"
        v-model="numOfPecies"
      />

      <button @click="addToCart">Add to Cart</button>

      <div v-if="!messageError" class="toast">
        <p>
          order Added! <br />
          Return to <a href="/restaurant">Restaurant</a>
        </p>
      </div>
      <div v-else class="toast">
        <p>
          Please select options and <br />
          addons before continuing
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: "defult",
  data() {
    return {
      id: this.$route.params.id,
      addOns: [],
      addOptions: "",
      numOfPecies: "1",
      messageError: true,
    };
  },
  methods: {
    addToCart: function () {
      if (this.addOns.length != 0) {
        let item = {};
        item.id = this.orderNumber;
        item.name = this.currentItem.item;
        item.addOns = this.addOns;
        item.option = this.addOptions;
        item.price = this.currentItem.price;
        item.amount = this.numOfPecies;
        this.messageError = false;
        this.$store.commit("addToCart", item);
        this.$store.commit("updateOrderNumber");
      } else {
        this.messageError = true;
      }
    },
  },
  computed: {
    ...mapState(["fooddata", "orderNumber"]),

    currentItem: function () {
      let i, j;
      for (i in this.fooddata)
        for (j in this.fooddata[i].menu) {
          if (this.fooddata[i].menu[j].id === this.id)
            return this.fooddata[i].menu[j];
        }
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  font-weight: bold;
}
.container {
  margin: 50px 200px;
  display: grid;
  grid-template-columns: 400px 300px 300px;
  gap: 40px;
}
.description {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 400px;
  height: 400px;
  background-size: cover;

  img {
    width: 100%;
    height: 70%;
  }
}
fieldset {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.descriptionDetails {
  padding: 2px;
}
@media screen and(max-width :600px) {
  .container {
    display: flex;
    flex-direction: column;
    margin: 10px 10px;
  }
  .description {
    margin: auto;
    width: 90%;
    height: 90%;
  }
}
a,
p {
  color: #fff;
}
</style>
