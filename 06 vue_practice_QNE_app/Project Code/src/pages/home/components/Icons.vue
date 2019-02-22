<template>
	<div class="icons-container">
		<swiper>
			<swiper-slide v-for="(page,index) of pages" :key='index'>
				<div class="icon" v-for="item of page" :key="item.id">
					<div  class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl" alt="" />
					</div>
					<p class="img-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>	
			
		</swiper>

	</div>
</template>

<script>
	export default {
		name:'HomeIcons',
		props:{
			list:Array
		},
		computed:{
			pages () {
				const pages=[];
				this.list.forEach((item,index)=>{
					const page=Math.floor(index/8);
					if(!pages[page]){
						pages[page]=[]
					}
					pages[page].push(item)
				})
				return pages;
			}
		}
	}
</script>

<style lang='stylus' scoped>
	@import '~styles/varibles.styl';
	@import '~styles/mixins.styl';
	
	.icons-container >>> .swiper-slide
		overflow:hidden;
		width:100%;
		height:0;
		padding-bottom:50% ;
/*		background-color: green;
*/		.icon
			position: relative;
			overflow: hidden;
			float: left;
			height: 0;
			width: 25%;
			padding-bottom:25%;
/*			background-color: red;
*/			.icon-img
				position: absolute;
				top:0;
				right: 0;
				left: 0;
				bottom: .44rem;
				padding:.1rem;

/*				background: blue;
*/				.icon-img-content
					height:100%;
					display:block;
					margin: 0 auto;
			.img-desc
				position: absolute;
				right: 0;
				left: 0;
				bottom: 0;
				height: .44rem;
				line-height: .44rem;
				color:$darkTextColor;
				text-align:center;
				ellipsis();
</style>