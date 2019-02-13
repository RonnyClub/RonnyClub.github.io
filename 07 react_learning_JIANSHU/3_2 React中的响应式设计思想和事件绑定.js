(TodoList.js)

import React,{Component,Fragment} from 'react';

class TodoList extends Component{
	
	constructor(props){
		super(props);
		this.state={
			inputValue:"嘿嘿嘿",
			list:[]
		}
		
	}
	
	render(){
		return(
			<div>
				<input 
					value={this.state.inputValue}
					onChange={this.handleInputChange.bind(this)}
				/>
				<button>提交</button>
				<ul>
					<li>英语</li>
					<li>数学</li>
				</ul>
			</div>
		)
	}
	
	handleInputChange(e){
		this.setState(
			{
				inputValue:e.target.value
			}
		)
	}
}

export default TodoList