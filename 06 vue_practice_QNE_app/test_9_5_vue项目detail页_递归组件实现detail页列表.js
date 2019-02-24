1/ (常规) 创建新组件 list.vue

2/ 写一级标题

父组件 写数据 data, list:[{},{},{}]
list被传值到  子组件 list.vue
list.vue 中循环数据,编写样式

常规的list,无递归组件,一级标题:


(数据)
data(){
	return {
		list:[{
			title:"成人票"
		},{
			title:"学生票"
		},{
			title:"儿童票"
		},{
			title:"特惠票"
		}]
	}
}



<template>
	<div>
		<div class="item" v-for="(item,index) of list" :key="index">
			<span class="item-icon"></span>{{item.title}}
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailList',
		props:{
			list:Array
		}
	}
</script>

<style lang="stylus" scoped>
	.item
		height:.8rem;
		line-height:.8rem;
		font-size:.32rem;
		padding:0 .02rem;
		.item-icon
			position:relative;
			left:.08rem;
			top:.06rem;
			display: inline-block;
			width: .36rem;
			height: .36rem;
			background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
			margin-right:.1rem ;
			background-size: .4rem 3rem;

</style>


3/ 后台传来的数据,可以使用递归组件;

(数据)

list:[{
		title:"成人票",
		children:[{
			title:"成人三馆联票"
		},{
			title:"成人五馆联票"
		},{
			title:"成人十馆联票"
		}]
	},{
		title:"学生票"
	},{
		title:"儿童票",
		children:[{
			title:"儿童三馆联票"
		},{
			title:"儿童五馆联票"
		},{
			title:"儿童十馆联票"
		}]
	},{
		title:"特惠票"
	}]


(逻辑)
用v-if判断有没有children组,如果有,显示写入递归组件
给children部分添加css样式,使其缩进部分

<template>
	<div>
		<div  v-for="(item,index) of list" :key="index">
			<div class="item">
				<span class="item-icon"></span>{{item.title}}
			</div>

			<div v-if="item.children" class="item-children">        这里是children部分
				<detail-list :list="item.children"></detail-list>
			</div>

		</div>
	</div>
</template>

	(css)
	.item-children
		padding:0 .3rem;