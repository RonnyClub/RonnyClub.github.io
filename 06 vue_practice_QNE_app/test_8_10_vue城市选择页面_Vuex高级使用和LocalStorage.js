1/ 利用LocalStorage实现类似cookie的功能
帮助浏览器记住上次定位城市

state:{
	city: localStorage.city || '杭州'
},

mutations:{
	changeCity(state,city){
		state.city=city
		localStorage.city=city
	}
}

-----------
用try catch 来避免浏览器冲突

	let defaultCity = '上海'
	try{
		if(localStorage.city){
			defaultCity=localStorage.city
		}
	}catch(e){
		//TODO handle the exception
	}



--------------------------------------------------------
2/ 这里有学习

如何拆分vuex的store的 index.js 的的代码

---------------
使用 vuex的 mapState
import { mapState } from 'vuex'
...mapState(['city'])

----------------
使用 vuex 的 mapMutations
...mapMutations(['changeCity'])

----------------
vuex中  getters的作用  类似于  computed计算属性

----------------
vuex中 module 可以用来 分割store,使其模块化
"Vuex 允许我们将 store 分割成模块（module）。"
"每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块"

const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})