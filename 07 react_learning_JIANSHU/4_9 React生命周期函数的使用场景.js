1/ 需求:
在父组件的input中输入内容,父组件将重新执行 render(){} 函数
此时,子组件也将执行 render(){} ,这是一种性能消耗,需要改善

2/ 解决办法:
在子组件中使用 shouldComponentUpdata(){} 函数,判断传入的props是否改变,如果改变,则重新渲染

3/ 代码:

shouldComponentUpdate(nextProps,nextState){
	if(nextProps.content != this.props.content){
		return true;
	}else{
		return false;
	}
}

4/ 代码解释:
shouldComponentUpdate(){} 会接收两个参数 nextProps,nextState
nextProps代表即将更新的传入值,nextState代表即将更新的state值

content是源代码中从父组件传来的props
this.props.content 是当前的传入的content值


---------------------------------------------------
React中的性能优化:
1/ 方法作用域绑定优化
	在constructor中定义作用域绑定,避免多次绑定:

			constructor(props){
				super(props);
				this.handleClick=this.handleClick.bind(this);
			}

2/ ???不记得了
setState中内置了性能优化,将多次数据的改变结合成一次

3/ shouldComponentUpdate(){} 避免不必要的数据更新



------------------------------------------------------

生命周期函数使用场景二:发送Ajax请求

	发送ajax请求,建议使用 componentDidMount(){}
	其实使用 componentWillMount(){} 也可以,但是在后面更复杂的使用中,可能和一些操作产生冲突,所以这里就确定使用 componentDidMount(){}好了

在react中,需要使用第三方模块来发送ajax请求:

1/ 安装:
在项目目录下:
(命令行): 	yarn add axios
			注:使用yarn命令没成功,我使用了 npm add axios --- 成功安装
2/ 使用:
(TodoList.js中)


先引入:
	import axios from 'axios'


在 componentDidMount 中使用:

	componentDidMount(){
		axios.get('/api/todolist')
			.then(()=>{alert("succ")})			成功执行 then()
			.catch(()=>{alert("error")})		异常执行 catch() 
	}