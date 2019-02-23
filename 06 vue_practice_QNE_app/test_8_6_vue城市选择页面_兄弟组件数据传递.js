1/ 父子组件传值方法实现兄弟组件传值:

--------------------------------------------------
Alphabet组件 向 父组件传值

<ul class="list">
	<li 
		class="item" 
		v-for="(item,key) of cities"
		@click="letterChange"				click触发 letterChange()函数
	>
		{{key}}
	</li>
</ul>	



	letterChange() 向父组件emit一个change事件,并携带参数 e.target.innerText
	体会一下事件参数e

methods:{
	letterChange(e){
		this.$emit("change",e.target.innerText)
	}
}

--------------------------------------------
父组件接受数据 再将数据派发给 List子组件

<city-alphabet :cities='cities' @change="handleLetterChange"></city-alphabet>

data(){
	return{
		letter:''
	}
}

methods:{
	handleLetterChange(letter){
		this.letter=letter
	}
}

<city-list :cities='cities' :hot='hotCities' :letter="letter"></city-list>


-------------------------------------------------
List子组件中 用watch方法监听"letter"的改变
改变时,调用betterscroll的方法,this.scroll.scrollToElement(DOM元素)
(DOM元素)用$refs获取

(<div class="area" v-for="(item,key) of cities" :key="key" :ref="key">)

watch:{
	letter(){
		if(this.letter){
			this.scroll.scrollToElement(this.$refs[this.letter][0])
		}
	}
}

-------------------------------------------------------------------
2/ 手指拖动字母表功能实现

划重点:-----------------

@touchstart="handleTouchStart"
@touchmove="handleTouchMove"
@touchend="handleTouchEnd"


computed:{
			letters(){
				const letters=[];
				for(let i in this.cities){
					letters.push(i)
				}
				return letters
			}
		},
		data(){
			return{
				touchStatus:false
			}
		},
		methods:{
			letterChange(e){
				this.$emit("change",e.target.innerText)				
			},
			handleTouchStart(){
				this.touchStatus=true;
			},
			handleTouchMove(e){
				if(this.touchStatus){
					const startY=this.$refs["A"][0].offsetTop
					const touchY=e.touches[0].clientY-79
					const touchIndex=Math.floor((touchY-startY)/20)
					if(touchIndex>=0 && touchIndex<=this.letters.length){
						this.$emit("change",this.letters[touchIndex])
					}
				}
			},
			handleTouchEnd(){
				this.touchStatus=false;
			}
			
		}


源代码:----------------
<template>
		<ul class="list">
			<li 
				class="item" 
				v-for="item of letters"
				@click="letterChange"
				@touchstart="handleTouchStart"
				@touchmove="handleTouchMove"
				@touchend="handleTouchEnd"
				:key="item"
				:ref="item"
			>
				{{item}}
			</li>
		</ul>	
</template>

<script>
	export default {
		name:'CityAlphabet',
		props:{
			cities:Object
		},
		computed:{
			letters(){
				const letters=[];
				for(let i in this.cities){
					letters.push(i)
				}
				return letters
			}
		},
		data(){
			return{
				touchStatus:false
			}
		},
		methods:{
			letterChange(e){
				this.$emit("change",e.target.innerText)				
			},
			handleTouchStart(){
				this.touchStatus=true;
			},
			handleTouchMove(e){
				if(this.touchStatus){
					const startY=this.$refs["A"][0].offsetTop
					const touchY=e.touches[0].clientY-79
					const touchIndex=Math.floor((touchY-startY)/20)
					if(touchIndex>=0 && touchIndex<=this.letters.length){
						this.$emit("change",this.letters[touchIndex])
					}
				}
			},
			handleTouchEnd(){
				this.touchStatus=false;
			}
			
		}
		
	}
</script>

<style lang="stylus" scoped>

	@import '~styles/varibles.styl'
	.list
		display:flex;
		flex-direction:column;
		justify-content:center;
		position:absolute;
		top:1.58rem;
		right:0;
		bottom:0;
		width:.4rem;
		.item
			display:block;
			text-align:center;
			line-height:.4rem;
			color:$bgColor;
</style>


