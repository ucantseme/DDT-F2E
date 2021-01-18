<template>
  <div id="app">
    <div class="order-list">
      <OrderListNav text="進行中" />
      <OrderCard v-for="order in processing" :key="order.id" :order="order" />
      <OrderListNav text="已完成" />
      <OrderCard v-for="order in done" :key="order.id" :order="order" />
    </div>
  </div>
</template>

<script>
import OrderListNav from '@/components/OrderListNav.vue'
import OrderCard from '@/components/OrderCard.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    OrderListNav,
    OrderCard,
  },
  computed: {
    ...mapGetters('order', ['processing', 'done']),
  },
  created() {
    this.getAllOrder()
  },
  methods: {
    ...mapActions('order', ['getAllOrder']),
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
.order-list {
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
}
</style>
