1/ 安装Redux
	npm install redux --save

2/ 创建stroe的index.js文件
	
	在src目录下创建stroe目录,在store目录下再创建index.js文件
		
	(/src/stroe/index.js)						这里建立好了state
		import { createStore } from 'redux'
		
		const store = createStore()
		
		export default store;
		
3/ 创建store下的reducer.js文件					这里建立好了reducer
	(/src/stroe/reducer.js)
	-------------------------------------
		const defaultState = {				定义默认数据(保留数据)
			inputValue:'',
			list:[]
		}

		export default (state = defaultState, action) => {			导出函数含有两个参数:state 和 action
			return state
		},
	-------------------------------------

4/ stroe的index.js文件使用reducer

		import {createStore} from 'redux'
		import reducer from './reducer.js'			引入reducer

		const store = createStore(reducer)			创建绑定reducer的store

		export default stroe;


5/ 在主文件AntdTodolist.js中使用
	
	---打印数据---
	
	import store from './store/index.js'
	
	constructor(props){
		super(props);
		console.log(store.getState())
	}
	

	---使用数据---
	
	constructor(props){
		super(props);
		console.log(store.getState())
		this.state=store.getState()			this.state引用store数据
	}
	
	input在value上使用数据等
	<Input value={this.state.inputValue} placeholder="todo content" style={{width:'300px',marginRight:'30px'}} />



代码:------------------------------------------------------,

(./src/store/index.js)----------------

	import {createStore} from 'redux'
	import reducer from './reducer.js'

	const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

	export default store;
	

(./src/store/reducer.js)-------------
	
	const defaultState = {
		inputValue:'123',
		list:[1,2]
	}

	export default (state = defaultState, action) => {
		return state
	}


(AntdTodolist.js)--------------------

import React,{Component} from 'react'
import 'antd/dist/antd.css'
import { Input,Button,List  } from 'antd'
import store from './store/index.js'


class AntdTodolist extends Component{
	
	constructor(props){
		super(props);
		console.log(store.getState())
		this.state=store.getState()
	}
		
	
	render(){
		return(
			<div style={{marginLeft:'30px',marginTop:'30px'}}>
				<div>
					<Input value={this.state.inputValue} placeholder="todo content" style={{width:'300px',marginRight:'30px'}} />
					 <Button type="primary">提交</Button>
				</div>
				
				 <List
				  style={{width:'300px',marginTop:'10px'}}
			      header={<div>Header</div>}
			      footer={<div>Footer</div>}
			      bordered
			      dataSource={this.state.list}
			      renderItem={item => (<List.Item>{item}</List.Item>)}
			    />
				
			</div>
		)
	}

}

export default AntdTodolist;