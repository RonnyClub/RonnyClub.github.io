<template>
	<div>
		<div class="recommend">热销推荐</div>
		<ul>
			<li class="recommendList" v-for='item of list' :key="item.id">
				<img class="recommendImg" :src="item.imgUrl" alt="" />
				<div class="rec_text">
					<p class="rec_title">{{item.title}}</p>					
					<p class="rec_desc">{{item.desc}}</p>					
					<button class="rec_button">查看详情</button>					
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"HomeRecommend",
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
		height:1.9rem;
		display: flex;
		.recommendImg
			width:1.7rem;
			height:1.7rem;
			padding:.1rem ;
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
			.rec_button
				line-height:.44rem ;
				margin-top:.16rem;
				background: #ff9300;
				padding:0 .2rem;
				border-radius: .06rem;
				color: #fff;
</style>