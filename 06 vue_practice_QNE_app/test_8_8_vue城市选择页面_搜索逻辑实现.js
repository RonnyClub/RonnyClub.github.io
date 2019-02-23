基本自己写的,要哭了

代码:--------------------------
<template>
	<div>
		<div class='search'>
			<input v-model="keywords" class="search-input" type="text" placeholder="输入城市名或拼音" />
		</div>
		<div class="search-content" v-show="keywords" ref="search">
			<ul>
				<li class='matchitem border-bottom' v-for="item of matchlist">{{item.name}}</li>
				<li class='matchitem border-bottom' v-show="!matchlist.length">未找到匹配项</li>			
			</ul>
		</div>
	</div>
	
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name:'CitySearch',
		props:{
			cities:Object
		},
		data(){
			return{
				keywords:'',
				matchlist:[]
			}
		},
		mounted(){
			this.scroll=new BScroll(this.$refs.search)
		},
		watch:{
			keywords(){

				this.matchlist=[]
					
				for(let i in this.cities){
					this.cities[i].forEach((item)=>{
						if(item.spell.indexOf(this.keywords)>-1 || item.name.indexOf(this.keywords)>-1){
							this.matchlist.push(item)
						}
					})
				}
				
			console.log("666")
			}
		}
	}
</script>

<style lang="stylus" scoped>

	@import '~styles/varibles.styl'
	.search
		height:.72rem;
		background:$bgColor;
		padding:0 .3rem;
		.search-input
			box-sizing:border-box;
			height:.62rem;
			line-height:.62rem;
			width:100%;
			text-align:center;
			color:#666;
			padding:0 .1rem;
			border-radius: .06rem;
	.search-content
		z-index:1;
		position:absolute;
		top:1.58rem;
		left:0;
		right:0;
		bottom:0;
		overflow:hidden;
		background:#eee;
		.matchitem
			height:.62rem;
			line-height:.62rem;
			background:#fff;
			padding-left:.2rem;
			color:#666;
</style>