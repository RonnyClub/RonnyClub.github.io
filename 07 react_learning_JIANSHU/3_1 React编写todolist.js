1/在入口文件中引入并使用组件

import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js';	//引入组件

ReactDOM.render(<TodoList />,document.getElementById('root'));	//使用组件

---------------------------------------

2/定义组件基本结构

(代码):

// 由于使用JSX和组件 导入react,{component}
import React,{Component} from 'react';

//从基本组件继承到todolist,并返回html结构
class TodoList extends Component {
	render(){
		return (
			<div>Hello</div>
		)
	}
}

// 导出组件
export default TodoList

-------------------------------------------

3/ 组件根标签 和 占位符<Fragment>
	//JSX语法中 ,组件return(),其中内容需要有一个根标签<div>
	//可以通过<Fragment>占位根目录,在渲染时自动去掉
	import React,{Component,Fragment} from 'react';
	
	render(){
		return (
			<Fragment>
				<div>Hello</div>
				<div>World</div>
			</Fragment>
		)
	}
	
	
