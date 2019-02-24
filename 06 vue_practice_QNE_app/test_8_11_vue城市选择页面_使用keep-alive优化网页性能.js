1/ 用<keep-alive>标签 包裹 根组件的路由

这是vue自带的一个标签
标签内被请求的内容将进入内存,需要时调用,避免多次请求,消耗性能


2/ 对ajax请求添加 城市参数
	
	axios.get('/api/index.json?city='+this.$store.state.city)


3/ 对 路由(内容) 使用 <keep-alive>标签时
将多出来一个生命周期钩子: activated(){}
页面被重新显示的时候,activated(){}将被执行

利用 activated(){},增加判断,是否需要重新发送ajax请求

mounted () {
	this.lastCity=this.$store.state.city
	this.getHomeInfo();
},
activated(){
	if(this.lastCity!=this.$store.state.city){
		this.getHomeInfo();
		this.lastCity=this.$store.state.city
	}
}