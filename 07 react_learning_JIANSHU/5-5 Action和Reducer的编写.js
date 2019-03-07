1/ 安装Redux的调试工具

科学上网-网上应用商店-redux_devtools

2/ 配置Redux调试工具
	在store/index.js中加入一个配置语句,这样才能正常使用
	const store = createStore(
			reducer,
	+		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)


-------------------------------------------
3/ 编写input框内容改变store的Redux传值过程

思路:	对input框绑定onChange事件,交予handleInputChange处理,
	在handleInputChange中传递事件和数据,定义action对象,并dispatch它
	store/index.js转发到store/reducer.js中,reducer接受到action,打印它
	
实现:
(AntdTodoList.js)------------------

输入框DOM:-----
	<Input 
		value={this.state.inputValue} 
		placeholder="todo content" 
		style={{width:'300px',marginRight:'30px'}} 
		onChange={this.handleInputChange.bind(this)}
	/>

处理函数	handleInputChange:-----
	handleInputChange(e){
		const action = {
			type:'change_input_value',
			value:e.target.value
		}
		store.dispatch(action)
	}

(reducer.js)---------------------
	export default (state = defaultState, action) => {	这里的defaultState是一开始在reducer里设置好的默认值,只在store尚未传值的时候使用
		console.log(state,action)			这里参数和打印的action就是dispatch来的action
		return state
	}
	
	reducer.js完整:-----------
	
	const defaultState = {
	inputValue:'123',
	list:[1,2]
	}

	export default (state = defaultState, action) => {
		if(action.type ==='change_input_value'){
			const newState = JSON.parse(JSON.stringify(state))
			newState.inputValue=action.value;
			return newState;
		}
		return state
	}

-------------------------------------------------
4/ 组件中感知store的变化并获取state

感知变化:
	store.subscribe(this.handleStoreChange.bind(this));		感知变化并执行函数
	
设置新数据:
	handleStoreChange(){
		this.setState(store.getState())
	}

更多代码:------------------------------------------

	constructor(props){
		super(props);
		this.state=store.getState()
		store.subscribe(this.handleStoreChange.bind(this));
	}

	handleStoreChange(){
		this.setState(store.getState())
	}
	
---------------------------------------------------
----------------------------------------------------------------------------------------------

列表功能制作:

完成,非常好!

完整代码:

(AntdTodoList.js)-----------------------

import React,{Component} from 'react'
import 'antd/dist/antd.css'
import { Input,Button,List  } from 'antd'
import store from './store/index.js'


class AntdTodolist extends Component{
	
	constructor(props){
		super(props);
		this.state=store.getState()
		store.subscribe(this.handleStoreChange.bind(this));
	}
		
	
	render(){
		return(
			<div style={{marginLeft:'30px',marginTop:'30px'}}>
				<div>
					<Input 
						value={this.state.inputValue} 
						placeholder="todo content" 
						style={{width:'300px',marginRight:'30px'}} 
						onChange={this.handleInputChange.bind(this)}
					/>
					 <Button 
					 	type="primary"
					 	onClick={this.handleBtnClick.bind(this)}
					 >
					 	提交
					 </Button>
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
	
	handleInputChange(e){
		const action = {
			type:'change_input_value',
			value:e.target.value
		}
		store.dispatch(action)
	}
	
	handleStoreChange(){
		this.setState(store.getState())
	}
	
	handleBtnClick(){
		const action={
			type:'add_todo_item',
		}
		store.dispatch(action)
	}

}

export default AntdTodolist;


(reducer.js)---------------------

const defaultState = {
	inputValue:'',
	list:[1,2]
}

export default (state = defaultState, action) => {
	if(action.type ==='change_input_value'){
		const newState = JSON.parse(JSON.stringify(state))
		newState.inputValue=action.value;
		return newState;
	}
	
	if(action.type ==='add_todo_item'){
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.push(newState.inputValue);
		newState.inputValue=''
		return newState
	}
	
	
	return state
}
