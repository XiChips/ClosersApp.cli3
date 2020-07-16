<template>
  <div class="container">
    <div class="main">
      <mt-header fixed title="Welcome to Closers !"></mt-header>
      <router-view></router-view>
    </div>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">{{count}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      msg: "hello"
    };
  },
  methods: {
    hidden() {
      this.$(".mint-header").css("transform", "translateY(-100%)");
      this.$(".mint-header").css("opacity", "0");
    },
    autoHidden() {
      setTimeout(() => {
        this.hidden();
      }, 3000);
    },
    clickHidden() {
      this.$("html").click(()=> {
        this.hidden()
      });
    }
  },
  mounted: function() {
    this.autoHidden();
    this.clickHidden();
  },
  computed: {
    ...mapState(["count"])
  }
};
</script>

<style scoped>
.container {
  padding-bottom: 50px;
}
.mint-header {
  background-color: deepskyblue;
  opacity: 1;
  transform: translateY(0) rotateX(0);
  transition: all 0.6s ease-in-out 0s;
}
</style>