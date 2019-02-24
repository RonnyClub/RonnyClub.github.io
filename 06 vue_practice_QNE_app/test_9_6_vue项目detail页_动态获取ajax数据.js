1/ 引入给出的json文件
在 detail.vue 发送请求,获取数据

	其中使用了路由的特性: this.$router.params.id

	  
	路由跳转配置(/home/Recommend.vue)		:to="'/detail/'+item.id"
	路由配置(index.js)	 path: '/detail/:id',

	获取数据:
			getDetailInfo(){
				axios.get('/api/detail.json?id='+this.$route.params.id).then(this.getDetailInfoSucc)
				或者
				axios.get('/api/detail.json',{
					params:{
						id:this.$route.params.id
					}
				}).then(this.getDetailInfoSucc)
			

2/ (常规)使用数据


3/ 解决<keep-alive>缓存的问题

方法一: 用 activated(){} 方法,重新请求ajax
方法二: 用 exclude="Detail" 来阻止缓存 ("Detail"是组件名称)
		<div id="app">
			<keep-alive exclude="Detail">
				<router-view/>
			</keep-alive>
		</div>

4/ 关于组件Name总结
			 export default{
				name:"Name"
			}

		这里的name的用途:
			1/ 递归组件用
			2/ <keep-alive exclude="Detail">用
			3/ dev-tools 控制台显示的标签名就是这个


5/ 解决路由滚动行为
	路由切换时,新页面的scroll位置会和旧页面一样,我们需要每次打开新页面,总在顶端
	解决:
		在 路由(/router/index.js) 中添加一段代码

		scrollBehavior (to, from, savedPosition) {
			return { x: 0, y: 0 }
		}


-------------------------------------------

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
		{
		  path: '/detail/:id',
		  name: 'Detail',
		  component: Detail
		}
  ],
  scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})

--------------------------------------------