ref帮助我们在React中直接获取DOM元素

1/ 用ref指定元素:
<input 
	id='inputArea'
	value={this.state.inputValue}
	onChange={this.handleInputChange}
	ref={(input)=>{this.input=input}}		没懂,先记着吧
/>

那么,
this.input指代了这个<input />的内容

老师不推荐使用ref:react中尽量数据驱动,不要操作DOM
------------------------------------------------
2/ this.setState第二个参数是一个回调函数

this.setState是一个异步函数,平行的函数可能不是按顺序在它的后面执行,很可能是在它之前执行,即使按照顺序应该先执行 this.setState
通过这个回调函数,可以解决这个问题

关于prevState:
prevState就相当于当前状态的this.state
(还有第二个参数props,代表当前状态的 this.props)

为什么不用 this.state和this.props?	
官方给出的原因是:this.state和this.props更新是异步的,不应该直接使用它们计算下一个状态的值		

handleBtnClick(){
		this.setState((prevState)=>(
			{list:[...prevState.list,prevState.inputValue]}
		),
		()=>{
			console.log('呵呵哒')
			}
	)
	}