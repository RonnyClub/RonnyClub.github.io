1/ 对组件的DOM结构分别形成 多个area
分别是 '当前城市','热门城市','A','B'等等

<div class="list">
	<div class="area">
		<div class="title border-topbottom">当前城市</div>
	</div>
	<div class="area">
		<div class="title border-topbottom">热门城市</div>
	</div>
	<div class="area">
		<div class="title border-topbottom">A</div>
	</div>
</div>

!!! 在class添加'border-topbottom',用于添加一像素边框

------------------------------------
1.2/	其他:修改一像素边框的颜色 以及 关于stylus的'&:'特性
		
.border-topbottom
	&:before
		border-color:#ccc;
	&:after
		border-color:#ccc;

说明:
& 是stylus的特性,是父级引用
示例:
.text-box
    &:hover
        background-color: powderblue
相当于:
.text-box:hover {
  background-color: #b0e0e6;
}

-------------------------------------
2/ 本节代码如下:

<template>	
	<div class="list">
		<div class="area">
			<div class="title border-topbottom">当前城市</div>
			<div class="button-list">
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>				
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<div class="button-list">
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>				
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>				
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>				
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>				
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>					
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">A</div>
			<div class="item-list">
				<div class="item border-bottom">国际空间站</div>
				<div class="item border-bottom">国际空间站</div>
				<div class="item border-bottom">国际空间站</div>
				<div class="item border-bottom">国际空间站</div>
				<div class="item border-bottom">国际空间站</div>
				<div class="item border-bottom">国际空间站</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">B</div>
			<div class="item-list">
				<div class="item border-bottom">国际空间站</div>
				<div class="item border-bottom">国际空间站</div>
				<div class="item border-bottom">国际空间站</div>
				<div class="item border-bottom">国际空间站</div>
				<div class="item border-bottom">国际空间站</div>
				<div class="item border-bottom">国际空间站</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">C</div>
			<div class="item-list">
				<div class="item border-bottom">国际空间站</div>
				<div class="item border-bottom">国际空间站</div>
				<div class="item border-bottom">国际空间站</div>
				<div class="item border-bottom">国际空间站</div>
				<div class="item border-bottom">国际空间站</div>
				<div class="item border-bottom">国际空间站</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'CityList'
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	
	.border-topbottom
		&:before
			border-color:#ccc;
		&:after
			border-color:#ccc;
	.title
		line-height:.44rem;
		padding-left:.2rem;
		background:#eee;
		color:#666;
	.button-list
		box-sizing:border-box;
		padding:.1rem .6rem .1rem .1rem;
		overflow:hidden;
		.button-wrapper
			width:33%;
			float:left;
			.button
				border:.02rem solid #ccc;
				text-align:center;
				margin:.1rem;
				padding:.1rem 0;
				border-radius:.06rem;
	.item-list
		.item
			line-height:.76rem;
			padding-left:.2rem;
			color:#666;
	
</style>