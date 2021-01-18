<template>
  <div class="order-card">
    <img
      class="order-card-img"
      :class="{ done: isDone }"
      :src="order.logo"
      alt="product"
    />
    <div class="order-card-body">
      <div class="order-card-body-status">
        <span :class="{ processing: !isDone }">{{ order.status.type }}</span>
        <span v-if="!isDone">預計出貨：{{ order.date }}</span>
      </div>
      <div class="order-card-body-name">{{ order.name }}</div>
    </div>
    <font-awesome-icon class="order-card-icon" icon="chevron-right" />
  </div>
</template>

<script>
export default {
  name: 'OrderCard',
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isDone() {
      return this.order.status.code === 3 || this.order.status.code === 4
    },
  },
}
</script>

<style scoped lang="scss">
.order-card {
  width: 100%;
  height: 100px;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  &:hover {
    opacity: 0.8;
  }
  &-img {
    flex: 0 0 64px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 16px;
    &.done {
      filter: grayscale(1);
    }
  }
  &-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    letter-spacing: 1px;
    &-status {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      color: #333333;
      .processing {
        color: #019d4c;
      }
    }
    &-name {
      color: #979797;
    }
  }
  &-icon {
    flex: 0 0 30px;
    margin-left: 16px;
    color: #979797;
  }
}
</style>
