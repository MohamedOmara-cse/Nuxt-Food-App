<template>
  <div :style="`background: url(${item.img}) no-repeat center center`"></div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped></style>
