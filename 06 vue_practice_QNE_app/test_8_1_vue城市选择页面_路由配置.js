1/ 在router的 index.js中配置 

A.创建新组件 City.vue在pages目录下
	<template>
		<div>呵呵哒</div>
	</template>

	<script>
		export default {
			name:'City'
		}
	</script>

	<style lang="stylus" scoped>

	</style>

B.在 index.js 中引入新组件,配置新组件

(/router/index.js)------

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'    import新组件

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {							配置新路由对象,包含 路径path,组件component
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})


---------------------------------------------
2/ 利用 <router-link> 做页面跳转
需求: 点击Home页面中Header组件右侧 '城市名称',可以跳转到城市列表

解决:用 <router-link to='/city'> 包裹跳转标签

	<router-link to='/city'>        '/city'已经在 index.js 中做了配置  
		<div class="header-right">
			{{headercity}}<span class="iconfont">&#xe6aa;</span>
		</div>
	</router-link>

其他(bug):
<router-link> 会在原标签外侧加一个a标签,导致标签变色
	解决:在css中定义字体color


------------------------------------------------
3/ 城市选择页面雏形

<template>
	<div class="header">城市选择</div>
</template>

<script>
	export default {
		name:'CityHeader'
	}
</script>

<style lang="stylus" scoped>

	@import '~styles/varibles.styl'

	.header
		height:.86rem;
		line-height:.86rem ;
		text-align: center;
		color: #fff;
		background:$bgColor ;
		font-size:.32rem ;	
</style>


------------------------------------------------------
4/ 增加返回按钮 , 并带有路由跳转功能
(直接把HomeHeader里面那个弄过来就行了)

<router-link to='/'>
	<div class="header">
		<div class="iconfont header-back">&#xe624;</div>
		城市选择
	</div>
</router-link>