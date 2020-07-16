<template>
  <div class="goods_container">
    <div v-for="item in goods" :key="item.id" class="goods">
      <img class="goods_img" :src="item.src" alt />
      <div class="goods_info">
        <p class="goods_name">{{item.name}}</p>
        <p class="goods_price">价格：￥{{item.price}}</p>
        <p class="goods_price_old">原价：￥{{item.price}}</p>

      </div>
    </div>
    <div class="bottom"></div>
    <h4>点击商品添加到购物车~</h4>
    <h5>已购：{{$store.state.count}}项</h5>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: [
        {
          id: 1,
          name: "金币 * 100000",
          price: "500",
          src: require("./shopImg/100000金币.jpg")
        },
        {
          id: 2,
          name: "金币 * 300000",
          price: "500",
          src: require("./shopImg/300000金币.jpg")
        },
        {
          id: 3,
          name: "重生石 * 100",
          price: "30",
          src: require("./shopImg/重生石.jpg")
        },
        {
          id: 4,
          name: "重生石 * 100",
          price: "30",
          src: require("./shopImg/重生石.jpg")
        },
        {
          id: 5,
          name: "重生石 * 100",
          price: "30",
          src: require("./shopImg/重生石.jpg")
        },
        {
          id: 6,
          name: "重生石 * 100",
          price: "30",
          src: require("./shopImg/重生石.jpg")
        },
        {
          id: 7,
          name: "重生石 * 100",
          price: "30",
          src: require("./shopImg/重生石.jpg")
        }
      ]
    };
  },
  methods: {
    add(){
      this.$(".goods").click(()=>{
        this.$store.commit("add")
      })
    },
    action(){
      this.$("h4").show(200);
      setTimeout(() => {
        this.$("h4").hide(200);
      }, 5000);
    }
  },
  mounted:function() {
    this.add();
    this.action();
  },
};
</script>
  
<style  scoped>
.goods_container{
  padding: 0px 5px 0 5px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
}
.goods {
  margin-top: 10px;
  width: 49%;
  border: 1px solid #ccc;
  box-shadow:  0 0 0 2px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 0 2px 2px 2px;
  min-height: 162px;
}
.goods_img {
  width: 40%;
  float: left;
  margin: 20px 0 30px 30%;
}
.goods_info {
  background-color: lightcyan;
  width: 100%;
}
.goods_name{
  margin-top: 5px;
}
.goods_price{
  color: red;
  float: left;
  margin-left: 8%;
}
.goods_price_old{
  float: right;
  margin-right: 8%;
  font-size: 10px;
  text-decoration: line-through;
}
.bottom {
  height: 30px;
}
h5 {
  color: black;
  height: 30px;
  width: 25%;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  clear: both;
  text-align: center;
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  background-color: lightblue;
}
h4 {
  color: black;
  text-align: center;
  line-height: 30px;
  clear: both;
  text-align: center;
  position: fixed;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  color: #999;
  font-size: 14px;
  display: none;
}
</style>