1/ 在本例的todolist中,包含UI组件和容器组件

UI组件是指页面渲染的部分
容器组件是指页面中的交互逻辑

2/ 基本思路:
新建一个UI.js组件,其中主要写入页面渲染布局
将原来的todolist.js中的render部分移植过来,对其中的参数等进行修改完善,如通过父子组件传值,正确引入库
在原来todolist中使用子组件的方式使用UI.js

以此达到拆分的目的

3/ 代码:

(AntdTodolist.js)--------------------

import React,{Component} from 'react'
import 'antd/dist/antd.css'
import store from './store/index.js'
import {getInputChangeAction,addItemAction,deleteItemAction} from './store/ActionCreator.js'
import AntdTodolistUI from './AntdTodolistUI'


class AntdTodolist extends Component{
	
	constructor(props){
		super(props);
		this.state=store.getState()
		store.subscribe(this.handleStoreChange.bind(this));
	}
		
	
	render(){
		return(
			<AntdTodolistUI 
				inputValue={this.state.inputValue}
				handleInputChange={this.handleInputChange.bind(this)}
				handleBtnClick={this.handleBtnClick.bind(this)}
				list={this.state.list}
				handleItemDelete={this.handleItemDelete.bind(this)}
			/>
		)
	}
	
	handleStoreChange(){
		this.setState(store.getState())
	}
	
	handleInputChange(e){
		const action = getInputChangeAction(e.target.value)
		store.dispatch(action)
	}
	
	
	handleBtnClick(){
		const action = addItemAction()
		store.dispatch(action)
	}
	
	handleItemDelete(index){
		const action = deleteItemAction(index)
		store.dispatch(action)
	}

}

export default AntdTodolist;



(AntdTodolistUI.js)--------------------

import React,{Component} from 'react'
import { Input,Button,List  } from 'antd'


class AntdTodolistUI extends Component{
	render(){
		return (
			<div style={{marginLeft:'30px',marginTop:'30px'}}>
				<div>
					<Input 
						value={this.props.inputValue} 
						placeholder="todo content" 
						style={{width:'300px',marginRight:'30px'}} 
						onChange={this.props.handleInputChange}
					/>
					 <Button 
					 	type="primary"
					 	onClick={this.props.handleBtnClick}
					 >
					 	提交
					 </Button>
				</div>
				
				<List
					  style={{width:'300px',marginTop:'10px'}}
				      header={<div>Header</div>}
				      footer={<div>Footer</div>}
				      bordered
				      dataSource={this.props.list}
				      renderItem={(item,index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
			    />
				
			</div>
		)
	}
}

export default AntdTodolistUI;