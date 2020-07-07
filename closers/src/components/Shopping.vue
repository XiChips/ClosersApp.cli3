<template>
  <div>
    <div class="goods">
      <p class="goods_name">商品1</p>
      <button class="goods_add" @click="add">添加</button>
    </div>
    <h5>已购：{{$store.state.count}}项</h5>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    add() {
      this.$store.commit("add");
    }
  }
};
</script>
  
<style  scoped>
.goods {
  width: 100%;
}
.goods_name {
  float: left;
}
.goods_add {
  float: right;
}
h5{
  clear: both;
  text-align: center;
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%)
}
</style>