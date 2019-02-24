1/ 上一节定义了一个全局事件,如果不解绑,将造成很多bug


对于一个标签绑定类似@click事件,只作用于这个标签,因此并不会产生很大影响
而对于window绑定全局事件,将一直挂载在窗口页面上,即使离开这个页面,也依然保持作用


---------
需求:及时解绑全局事件,避免一直触发
---------

解决:

利用 deactivated(){} 生命周期函数  -- 对应于 activated(){} ,将在页面退场时执行
使用 window.removeEventListener() 方法

	activated(){
		window.addEventListener('scroll',this.handleScroll)
	},
	deactivated(){
		window.removeEventListener('scroll',this.handleScroll)
	},