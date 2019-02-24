牛逼!

第一步 	创建新文件夹,新文件 
		(/common/fade/FadeAnimation.vue)
		里面写入动画并使用插槽

代码------

<template>
	<transition>
		<slot></slot>		到时候,一些内容会被直接插到这里来,并且可以被这里的样式控制
	</transition>
</template>

<script>
	export default {
		name:'FadeAnimation'
	}
</script>

<style lang="stylus" scoped>
	.v-enter, .v-leave-to{
		opacity:0;
	}
	.v-enter-active, .v-leave-active{
		transition: opacity .8s
	}
</style>

第二步, 在banner.vue中使用  FadeAnimation.vue

部分:
import FadeAnimation from '../../../common/fade/FadeAnimation.vue'
components:{
	CommonGallery,
	FadeAnimation
}



<fade-animation>
	<common-gallery 
		:imgs='imgs' 
		v-show='galleryShow' 
		@close="handleGalleryClose"
	>
	</common-gallery>
</fade-animation>


完美 完结 撒花