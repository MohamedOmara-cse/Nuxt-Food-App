export const state = () => ({
  fooddata: [],
  orderNumber: 1,
  mode: "",
  cart: [],
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
  updateOrderNumber: (state) => {
    state.orderNumber++;
  },
  changeMode: (state) => {
    state.mode ? (state.mode = "") : (state.mode = "dark-mode");
  },
  addToCart: (state, item) => {
    state.cart.push(item);
  },
  deleteOrder(state, id) {
    for (let i in state.cart) {
      if (state.cart[i].id == id) state.cart.splice(i, 1);
    }
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
