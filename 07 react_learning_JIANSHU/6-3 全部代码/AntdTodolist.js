import React,{Component} from 'react'
import 'antd/dist/antd.css'
import store from './store/index.js'
import {getInputChangeAction,addItemAction,deleteItemAction,getAjaxDataAction} from './store/ActionCreator.js'
import AntdTodolistUI from './AntdTodolistUI'
import axios from 'axios'



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
	
	componentDidMount(){
		axios.get('/todolist.json').then((res)=>{
			console.log(res.data)
			const data = res.data
			const action = getAjaxDataAction(data)
			store.dispatch(action)
		})
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