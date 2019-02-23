1/ 本节需要使用BetterScroll
需要先将使用部分进行相关设置:基本就是把list部分框定在页面中
(css)
.list
	position:absolute;
	overflow:hidden;
	top:1.78rem;
	bottom:0;
	left:0;
	right:0;


--------------------------------------------
2/ 安装BetterScroll
关闭服务器
在项目文件夹下
npm install better-scroll --save

--------------------------------------------
3/better-scroll的使用方法:查阅github

A.DOM结构:
<div class="wrapper">
  <ul class="content">
    <li>...</li>
    <li>...</li>
    ...
  </ul>
  <!-- you can put some other DOMs here, it won't affect the scrolling -->
</div>

说明:
滚动内容需要被嵌套两次
<div>
	<div>
		滚动内容
	</div>
</div>

本节代码:
<div class="list" ref='wrapper'>
		<div>
			内容
		</div>
</div>
	
-------------------------------
B.js代码:
官方:
import BScroll from 'better-scroll'
const scroll = new BScroll(wrapper)

本节:
<script>
	import BScroll from 'better-scroll'
	export default {
		name:'CityList',
		mounted(){
			this.scroll = new BScroll(this.$refs.wrapper)
		}
	}
</script>

----------------------------------------------------------------
4、制作右侧字母表（新组件）
（Alphabet.vue）

<template>
		<ul class="list">
			<li class="item">A</li>
			<li class="item">A</li>
			<li class="item">A</li>
			<li class="item">A</li>
			<li class="item">A</li>
		</ul>	
</template>

<script>
	export default {
		name:'CityAlphabet'
	}
</script>

<style lang="stylus" scoped>

	@import '~styles/varibles.styl'
	.list
		display:flex;
		flex-direction:column;
		justify-content:center;
		position:absolute;
		top:1.58rem;
		right:0;
		bottom:0;
		width:.4rem;
		.item
			display:block;
			text-align:center;
			line-height:.4rem;
			color:$bgColor;
</style>