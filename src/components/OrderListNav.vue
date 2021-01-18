<template>
  <div class="order-list-nav">
    <div class="order-list-nav-border"></div>
    <div class="order-list-nav-text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'OrderListNav',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.order-list-nav {
  width: 100%;
  height: 50px;
  padding: 0 16px;
  border-bottom: 1px solid#e5e5e5;
  background-color: #f5f5f5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &-border {
    width: 4px;
    height: 16px;
    background-color: #00a049;
    margin-right: 8px;
  }
}
</style>
