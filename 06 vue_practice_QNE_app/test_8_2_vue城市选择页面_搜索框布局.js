非常常规的页面布局

应注意,input添加padding之后,可能会变宽,应当使用box-sizing:border-box;加以限制

代码如下:
<template>
	<div class='search'>
		<input class="search-input" type="text" placeholder="输入城市名或拼音" />
	</div>
</template>

<script>
	export default {
		name:'CitySearch'
	}
</script>

<style lang="stylus" scoped>

	@import '~styles/varibles.styl'
	.search
		height:.72rem;
		background:$bgColor;
		padding:0 .3rem;
		.search-input
			box-sizing:border-box;
			height:.62rem;
			line-height:.62rem;
			width:100%;
			text-align:center;
			color:#666;
			padding:0 .1rem;
			border-radius: .06rem;
	
</style>