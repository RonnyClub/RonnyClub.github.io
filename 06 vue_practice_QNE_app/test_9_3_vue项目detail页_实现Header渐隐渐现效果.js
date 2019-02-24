1/ 创建新的组件,并在Detail组件中引入和使用


-----------------------------------------
2/ 书写 返回按钮(absolute) 和 头部(fixed)

发现 absolute元素 也可以相对于 fixed元素 相对定位


-----------------------------------------
3/ 添加逻辑

涉及		v-show / activated / 
		window.addEventListener / document.documentElement.scrollTop

activated(){
	window.addEventListener('scroll',this.handleScroll)
},
methods:{
	handleScroll(){
		let top=document.documentElement.scrollTop;
		if(top>60){
			this.showAbs=false;
		}else{
			this.showAbs=true;
		}
	}
},
data(){
	return {
		showAbs:true
	}
}



----------------------------------------
4/ 渐隐渐现效果
给元素增加 :style 属性,属性值绑定一个对象

<div 
	class="header-fixed" 
	v-show="!showAbs"
	:style="opacityStyle"		定义:style属性
>

data(){
	return {
		showAbs:true,
		opacityStyle:{		属性值是一个对象
			opacity:0
		}
	}
}


scroll过程中,改变 opacity值------

	methods:{
		handleScroll(){
			let top=document.documentElement.scrollTop;
			if(top>60){
				this.showAbs=false;
				let opacity = top/140>1 ? 1 : top/140
				
				this.opacityStyle={
					opacity:opacity
				}
			}else{
				this.showAbs=true;
			}
		}
	},