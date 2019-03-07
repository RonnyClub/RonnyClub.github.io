生命周期函数 会在某一个时刻被组件自动调用执行的函数

生命周期函数执行顺序:
 
 
 ------Mounting-------
 
componentWillMount(){}  在组件即将被挂载到页面的时候执行(只在第一次挂载被执行,之后不执行)

render(){}		页面数据 state,props 发生改变时执行

componentDidMount(){} 组件被挂载到页面之后自动执行(只在第一次挂载被执行,之后不执行)



 ------Updation-------

 --(子组件:附加)--
 componentWillRecieveProps(){}
 	激发要求: 	子组件要从父组件接受参数
 				子组件第一次出现在页面,不会执行
 				子组件再一次出现在页面,将被执行

 ---
 
 shouldComponentUpdate(){	组件更新之前将自动执行,根据return的true或者false,决定是否继续执行
 	执行函数
 	return true;
 }


componentWillUpdata(){}		
		在组件即将被更新之前执行,这个函数定义在 shouldComponentUpdate() 之后
		是否执行还要看 shouldComponentUpdate() 是return true 还是 false


render(){}		updata阶段


componentDidUpdata(){}
		组件被更新完成之后执行		


 ------Unmounting-------

componentWillUnmount(){}


!注: 每个组件,包括父组件,子组件,兄弟组件等等,都有自己的生命周期函数,互相独立