1/ 在src目录下创建了 common文件夹,存放公用组件

(src/commom/gallery/Gallery.vue)
其中,写的是画廊组件相关内容

在 banner.vue中引入使用 Gallery组件

以上创建引入方式和普通组件一样,就是文件夹换了而已



------------------------------------------------
2/ 布局和swiper相对好写

swiper的配置参数:可以在中文官网找到

<swiper :options='swiperOption'>

data(){
	return {
		swiperOption:{
			pagination:'.swiper-pagination',
			paginationType:'fraction'
		}
	}
}

提醒:
	swiper插件自带很多样式等
	如果我们写的样式不能正常显示,很可能是和自带样式冲突,需要到控制台查看
	有时还要使用 击穿符号 '>>>' 来控制样式



--------------------------------------------------------
3/ Gallery雏形

<template>
	<div class="container">
		<div class="wrapper">
			<swiper :options='swiperOption'>
				<swiper-slide>
					<img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_r_800x800_087730c7.jpg" alt="">
					
				</swiper-slide>
				<swiper-slide>
					<img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/1901/ef/efd26a627912c27ca3.img.png_r_800x800_9969540b.png" alt="">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		name:'CommonGallery',
		data(){
			return {
				swiperOption:{
					pagination:'.swiper-pagination',
					paginationType:'fraction'
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.container
		position:fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		background:#000;
		display:flex;
		flex-direction:column;
		justify-content:center;
		.wrapper
			overflow:hidden;
			height:0;
			width:100%;
			padding-bottom:65%;
			.gallery-img
				width:100%;
			.swiper-pagination
				color:#fff;
</style>

-------------------------------------------------------
4/ Gallery中用props接受数据
其中定义 接受数据类型 和 默认数据

循环swiper:

<swiper-slide v-for='(item,index) of imgs' :key='index'>
	<img class="gallery-img" :src="item" alt="">
</swiper-slide>


props:{
	imgs:{
		type:Array,
		default(){
			return ["http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_r_800x800_087730c7.jpg","http://img1.qunarzz.com/sight/p0/1901/ef/efd26a627912c27ca3.img.png_r_800x800_9969540b.png"]
		}
	}
}


-----------------------------------------------------------
5/ 从 调用组件(父组件) 传数据

		<common-gallery :imgs='imgs'></common-gallery>


-----------------------------------------------------------
6/ 实现功能:
点击banner图片,显示gallery
点击gallery拖图片,返回banner

思路:
	用v-show控制组件显示与否
	banner中,点击触发函数
	gallery中,点击触发 this.$emit ,在banner中接受并处理

难点:
	swiper显示后,会因为一些原因难以使用
	解决:
		配置swiper的options,使其显示时,重新刷新一次
		swiperOption:{
			pagination:'.swiper-pagination',
			paginationType:'fraction',
			observeParents:true,
			observer:true
		}



bug修复:天才
	页面从Home到Detail,会出现上一次的样子
	也就是上一次是画廊,依然显示画廊,不好
	用 activated(){}修复

	activated() {
			this.galleryShow=false;
		},

--------------------------------------------
7/ 代码:

(banner.vue)-----

<template>
	<div>
		<div class="banner" @click='handleBannerClick'>
			<img class="banner-img" src="//img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_600x330_b5e86902.jpg" alt="">
			<div class="banner-info">
				<div class="banner-title">野生动物世界(AAAAA景区)</div>
				<div class="banner-num">
					<span class="iconfont banner-icon">&#xe692;</span>12
				</div>
			</div>
		</div>
		<common-gallery :imgs='imgs' v-show='galleryShow' @close="handleGalleryClose"></common-gallery>
	</div>
	
</template>

<script>
	import CommonGallery from '../../../common/gallery/Gallery.vue'
	export default {
		name:'DetailBanner',
		components:{
			CommonGallery
		},
		activated() {
			this.galleryShow=false;
		},
		data(){
			return {
				galleryShow:false,
				imgs:["http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_r_800x800_087730c7.jpg","http://img1.qunarzz.com/sight/p0/1901/ef/efd26a627912c27ca3.img.png_r_800x800_9969540b.png","http://img1.qunarzz.com/sight/p0/1901/ef/efd26a627912c27ca3.img.png_r_800x800_9969540b.png"]
			}
		},
		methods:{
			handleBannerClick(){
				this.galleryShow=true;
			},
			handleGalleryClose(){
				this.galleryShow=false;
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.banner
		position:relative;
		//overflow:hidden;
		height:0;
		width:100%;
		padding-bottom:55%;
		background:red;
		.banner-img
			width:100%;
		.banner-info
			display:flex;
			position:absolute;
			left:0;
			right:0;
			bottom:0;
			height:.62rem;
			line-height:.62rem;
			color:#fff
			background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
			.banner-title
				flex:1;
				font-size:.38rem;
				padding-left:.2rem;
			.banner-num
				background:rgba(0,0,0,.8);
				height:.32rem;
				line-height:.32rem;
				padding:.08rem .3rem;
				border-radius: .2rem;
				margin-top:.05rem;
				margin-right:.08rem;
				.banner-icon
					font-size:.24rem;
					padding-right:.08rem;
</style>


(Gallery.vue)-----------

<template>
	<div class="container" @click="handleClose">
		<div class="wrapper">
			<swiper :options='swiperOption'>
				<swiper-slide v-for='(item,index) of imgs' :key='index'>
					<img class="gallery-img" :src="item" alt="">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		name:'CommonGallery',
		props:{
			imgs:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			handleClose(){
				this.$emit("close");
			}
		},
		data(){
			return {
				swiperOption:{
					pagination:'.swiper-pagination',
					paginationType:'fraction',
					observeParents:true,
					observer:true
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.container
		position:fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		background:#000;
		display:flex;
		flex-direction:column;
		justify-content:center;
		.wrapper
			overflow:hidden;
			height:0;
			width:100%;
			padding-bottom:65%;
			.gallery-img
				width:100%;
			.swiper-pagination
				color:#fff;
</style>
