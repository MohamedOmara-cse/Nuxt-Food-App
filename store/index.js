export const state = () => ({
  fooddata: [],
  mode: "",
  cart: [
    {
      id: "22672b93-2c65-4fd9-b151-683f7eb7df4a",
      name: "Shrimp Dumplings",
      addOns: ["mango pudding"],
      option: "",
      price: 6.49,
      amount: "2",
    },
    {
      id: "22672b93-2c65-4fd9-b151-683f7eb7df4a",
      name: "Shrimp Dumplings",
      addOns: ["mango pudding", "steamed sesame ball"],
      option: "",
      price: 6.49,
      amount: "2",
    },
    {
      id: "22672b93-2c65-4fd9-b151-683f7eb7df4a",
      name: "Shrimp Dumplings",
      addOns: ["mango pudding", "steamed sesame ball"],
      option: "",
      price: 6.49,
      amount: "2",
    },
  ],
});

//export const getters = {
//    getterValue: state => {
//        return state.value
//    }
//}
//
export const mutations = {
  //    updateValue: (state, payload) => {
  //        state.value = payload
  updateFoodData: (state, data) => {
    state.fooddata = data;
  },
  changeMode: (state) => {
    state.mode ? (state.mode = "") : (state.mode = "dark-mode");
  },
  addToCart: (state, item) => {
    item.index = state.cart.length;
    state.cart.push(item);
  },
  deleteOrder(state, index) {
    state.cart.splice(index, 1);
  },
};
//}
//
export const actions = {
  //    updateActionValue({ commit }) {
  //        commit('updateValue', payload)
  //    }
  async getFoodData({ state, commit }) {
    if (state.fooddata.length) return;

    try {
      await fetch(
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_KEY,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          commit("updateFoodData", data);
        });
    } catch (err) {
      console.log(err);
    }
  },
};
