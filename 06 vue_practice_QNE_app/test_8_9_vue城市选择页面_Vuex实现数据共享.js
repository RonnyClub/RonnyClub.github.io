1/ vue的数据框架--vuex

网址:https://vuex.vuejs.org/
本课中,Home.vue 和 City.vue 没有共用的父组件,组件传值不好解决

本课使用vuex来解决数据共享问题


--------------------------------------
2/ vuex数据框架讲解
请参考 vuex.png 中的结构图

其中 vue.component 是各个组件
各个组件和vuex挂钩,组件改变vuex数据的值,其他组件均可感知并作出相应处理

state--数据源 所有的共用数据均存放在state中,组件可以调用其中数据

组件改变数据:
vue.component 调用 actions (actions进行异步处理或者批量的同步操作?暂时不懂)
actions 调用 mutations ,改变公用数据的值

也可以 vue.component 直接调用 mutations,修改公用数据state


以上就是vuex单向改变数据的流程


--------------------------------------
3/ 安装和创建vuex

安装:项目文件,命令行下
npm install vuex --save

使用:
	新建文件夹和文件
	./store/index.js

--------(index.js)---------
	import Vue from 'vue'
	import Vuex from 'vuex'

	Vue.use(Vuex)

	export default new Vuex.Store({
		state:{
			city:'北京'
		}
	})




---------------------------------
4/ 在入口函数 main.js 中引入 store

import store from './store/index.js'

new Vue({
  el: '#app',
  router,
  store,						其实是 store:store
  components: { App },
  template: '<App/>'
})



---------------------------------
5/使用vuex的数据

在 Home.vue 的 Header 中,有一个city项
其中的数据是父组件通过axios获取,并传递到子组件Header中的
现在可以吧所有关于city的传递,定义,props,模拟数据统统删除
转而使用vuex中的数据

使用:
	this.$store.state.city


------------------------------------
6/ dispatch触发actions,修改公用数据state

第一步,对各个城市绑定click事件,触发函数

<div 
	class="button-wrapper" 
	v-for='item of hot' 
	:key='item.id'
	@click='handleCityClick(item.name)'			click事件
>
	<div class="button">{{item.name}}</div>
</div>					


-----------------------
第二步,处理函数接受传来的参数,用vuex的方法传回store/index.js中

methods:{
	handleCityClick(city){
		this.$store.dispatch('changeCity',city)
	}
}


-----------------------
第三步,store/index.js 中 actions被触发并执行函数

(store/index.js)

	import Vue from 'vue'
	import Vuex from 'vuex'

	Vue.use(Vuex);

	export default new Vuex.Store({
		state:{
			city:'杭州'
		},
		actions:{
			changeCity(ctx,city){
				ctx.commit("changeCity",city)
			}
		},
		mutations:{
			changeCity(state,city){
				state.city=city
			}
		}
	})


-------------------------------------------
7/ 本例中,因为没有复杂的异步操作等等
可以跳过actions,直接调用 this.$store.commit('changeCity',city)

methods:{
	handleCityClick(city){
		this.$store.commit('changeCity',city)
	}
},