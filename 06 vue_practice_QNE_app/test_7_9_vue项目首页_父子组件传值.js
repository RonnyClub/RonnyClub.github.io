1/ Home.vue中 定义 

传递Header中的数据

data,
methods,
以及数据传递:<home-header :headercity='city'></home-header>

-------------------------------------
完整代码:

<template>
	<div>


				呵呵哒 <home-header :headercity='city'></home-header>


		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
		<home-weekend></home-weekend>
	</div>
</template>

<script>
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/swiper'
	import HomeIcons from './components/Icons'
	import HomeRecommend from './components/Recommend'
	import HomeWeekend from './components/Weekend'
	import axios from 'axios'
	
export default{
		name:'Home',
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
				呵呵哒 data(){
					return {
						city:'',
					}
				},
				呵呵哒 methods:{
					getHomeInfo(){
						axios.get('/api/index.json')
							.then(this.getHomeInfoSucc)
					},
					getHomeInfoSucc(res){
						res=res.data
						if(res.ret&&res.data){
							this.city=res.data.city
						}
					}
				},
		mounted () {
			this.getHomeInfo();
		}
	}
</script>

<style>
</style>

-----------

子组件接收:
export default {
		name: 'HomeHeader',
		props:{
			headercity:String
		}
	}

-------------------------------------

2/ swiper中使用父组件传来的数组

bug:页面刷新后显示最后一张幻灯片
解决:用 v-if + computed 来解决

			<swiper-slide v-for="item of list" :key='item.id' v-if="showSwiper">
			
			computed:{
						showSwiper(){
							console.log('呵呵哒')
							return this.list.length
						}
					}

结果:未解决

------------------------------------
3/ 后面两个组件和前面的一样做就行

------------------------------------

4/ 停止swiper的自动滚动
可以再swiperOption中设置
