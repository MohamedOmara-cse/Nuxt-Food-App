<template>
  <div style="font-size:20px;font-weight:bold;">
    <label :for="select" > What restaurant you want?</label>
    <select @change="$emit('change', $event.target.value)" :name="select" :id="select">
      <option value >-- Please select a restaurant -- </option>
      <option v-for="kind in restaurants" :value="kind" :key="kind">{{kind}}</option>
    </select>
  </div>
</template>

<script>
  export default {
    props: {
     select: {
        type: String,
        default:'selectRestaurant'
      },
      restaurants:{
        type:Array,
        default:()=>['tacos','pizza','dim sum']
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
