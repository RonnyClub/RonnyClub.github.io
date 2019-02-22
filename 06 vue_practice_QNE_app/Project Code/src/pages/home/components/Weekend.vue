<template>
	<div>
		<div class="recommend">周末去哪儿</div>
		<ul>
			<li class="recommendList" v-for='item of list' :key="item.id">
				<div class="img-wrapper">
					<img class="recommendImg" :src="item.imgUrl" alt="" />
				</div>
				<div class="rec_text">
					<p class="rec_title">{{item.title}}</p>					
					<p class="rec_desc">{{item.desc}}</p>					
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"HomeWeekend",
		props:{
			list:Array
		}
	}
</script>

<style lang="stylus" scoped>

	@import '~styles/mixins.styl';

	.recommend
		line-height:.8rem;
		background:#eee;		
	.recommendList
		width:100%;
		.img-wrapper
			overflow:hidden;
			height:0;
			padding-bottom:33.9%;
			box-sizing:border-box;		
		.recommendImg
			width:100%;
		.rec_text
			flex: 1;
			padding:.1rem ;
			.rec_title
				line-height: .54rem;
				font-size:.32rem;
			.rec_desc
				line-height:.4rem ;
				color:#ccc;
				ellipsis();
</style>