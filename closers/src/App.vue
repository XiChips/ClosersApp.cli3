<template>
    <div class="container">
        <mt-header fixed title="Welcome to Closers !"></mt-header>
        <router-view></router-view>
        
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{count}}</span></span>
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

export default {
    data(){
		return{
			msg :'hello',
			count : this.$store.state.count
		}
	}
}
</script>

<style scoped>
    .container{
        padding-top: 40px;
		padding-bottom: 50px;
	}
	.mint-header{
		background-color:deepskyblue;
	}
</style>