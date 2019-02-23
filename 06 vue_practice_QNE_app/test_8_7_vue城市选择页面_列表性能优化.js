1/ 尽量减少touchmove事件中执行的内容,因为touchmove执行频率太高,消耗性能

原来:
handleTouchMove(e){
	if(this.touchStatus){
		const startY=this.$refs["A"][0].offsetTop     这条语句会执行非常多次
		const touchY=e.touches[0].clientY-79
		const touchIndex=Math.floor((touchY-startY)/20)
		if(touchIndex>=0 && touchIndex<=this.letters.length){
			this.$emit("change",this.letters[touchIndex])
		}
	}
},

解决:
实现定义startY,在数据updated后,更新startY
updated(){
	this.startY=this.$refs["A"][0].offsetTop
}


----------------------------------------------------------------
2/ 函数节流限制touchmove执行频率
data(){
	return{
		touchStatus:false,
		startY:0,
		timer:null					定义data
	}
},

handleTouchMove(e){
	if(this.touchStatus){
		const __this=this
		if(this.timer){
			clearTimeout(this.timer)
		}
		this.timer=setTimeout(()=>{
			const touchY=e.touches[0].clientY-79
			const touchIndex=Math.floor((touchY-__this.startY)/20)
			if(touchIndex>=0 && touchIndex<=this.letters.length){
				this.$emit("change",this.letters[touchIndex])
			}
		},16)
		
	}
},

说明:
A.节流阀:
	if(this.timer){
			clearTimeout(this.timer)
		}
		this.timer=setTimeout(()=>{
			被节流函数
		},16)

B.this引用
	这节不知道为什么,this引用出现问题.(按理说,使用箭头函数应该就OK了)
	解决:
		const __this=this
		...
		const touchIndex=Math.floor((touchY-__this.startY)/20)