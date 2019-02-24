------------------------------------------------------------
1/ 对 Home.vue中的 热销组件各项 添加<router-link>
问题:
<router-link> 会自动变成 <a>标签,导致字体变色:
解决:
	方案一:对css进行修饰
	
	方案二:用<router-link>替代<li>,并制定 tag 名称
			即:

				<router-link tag='li' to='/detail'>


------------------------------------------------------------
2/ 为路由跳转路径 添加 不同的路径
	
	<router-link
		tag='li'
		class="recommendList" 
		v-for='item of list' 
		:key="item.id"
		:to="'/detail/'+item.id"
	>

	哇塞! to 前面加了一个 : 哦


------------------------------------------------------------
3/ 添加新页面,新路由
	没有加2中的 item.id


------------------------------------------------------------
4/ banner布局

总结:
1 父级元素加flex,子元素将变成弹性布局,分布在一行或一列

2 用rgba设置css : background:rgba(0,0,0,.8);

3 添加(修改)矢量图标
iconfont获取到项目,下载到本地
将 iconfont.eot  iconfont.svg  iconfont.ttf  iconfont.woff iconfont.woff2 替换到travel目录下
修改 .css文件中的一行内容
替换icon编码即可

4 为div添加线性背景
	
	background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))