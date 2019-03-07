import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios'


class TodoList extends Component{
	
	constructor(props){
		super(props);
		this.state={
			inputValue:'',
			list:['嘻嘻嘻','哈哈哈','吼吼吼']
		}
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleBtnClick=this.handleBtnClick.bind(this);
		this.handleItemClick=this.handleItemClick.bind(this);
	}
	
	render(){
		return(
			<Fragment>
				<label htmlFor='inputArea'>输入内容</label>
				<input 
					id='inputArea'
					value={this.state.inputValue}
					onChange={this.handleInputChange}
					ref={(input)=>{this.input=input}}
				/>
				<button onClick={this.handleBtnClick}>提交</button>
				<ul>
					{this.getItemList()}
				</ul>
			</Fragment>
		)
	}
	
	componentDidMount(){
		axios.get('/api/todolist')
			.then((res)=>{
				console.log(res.data)			//成功执行 then()
				this.setState(()=>{
				return {
					list:res.data
				}
			})
			})									
			.catch(()=>{alert("error")})		//异常执行 catch() 
	}
	
	getItemList(){
		return (
			this.state.list.map((item,index)=>{
							return (
									<TodoItem 
										key={index}
										content={item} 
										index={index}
										deleteItem={this.handleItemClick}
									/>
							)
						})
		)
	}
	
	handleInputChange(e){
		const value=e.target.value
		this.setState(()=>{
			return {
				inputValue:value
				}
		})
	}
	
	handleBtnClick(){
		this.setState((prevState)=>(
			{list:[...prevState.list,prevState.inputValue]}
		))
	}
	
	handleItemClick(index){
		const list=[...this.state.list]
		list.splice(index,1)
		
		this.setState({
			list:list
		})
	}
}

export default TodoList