<template>
	<div>
		<home-header :headercity='city'></home-header>
		<home-swiper :list='swiperList'></home-swiper>
		<home-icons :list='iconsList'></home-icons>
		<home-recommend :list='recommendList'></home-recommend>
		<home-weekend :list='weekendList'></home-weekend>
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
		data(){
			return {
				city:'',
				swiperList:[],
				iconsList:[],
				recommendList:[],
				weekendList:[]
			}
		},
		methods:{
			getHomeInfo(){
				axios.get('/api/index.json')
					.then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res){
				res=res.data
				if(res.ret&&res.data){
					this.city=res.data.city
					this.swiperList=res.data.swiperList
					this.iconsList=res.data.iconList
					this.recommendList=res.data.recommendList
					this.weekendList=res.data.weekendList
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