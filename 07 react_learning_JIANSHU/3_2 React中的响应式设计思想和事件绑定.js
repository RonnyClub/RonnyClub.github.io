(TodoList.js)

import React,{Component,Fragment} from 'react';

class TodoList extends Component{
	
	constructor(props){
		super(props);			这是认为是固定写法
		this.state={
			inputValue:"嘿嘿嘿",					数据部分!
			list:[]
		}		
		
	}
	
	render(){
		return(									DOM视图部分!
			<div>
				<input 
					value={this.state.inputValue}
					onChange={this.handleInputChange.bind(this)}		.bind认为是固定写法
				/>
				<button>提交</button>
				<ul>
					<li>英语</li>
					<li>数学</li>
				</ul>
			</div>
		)
	}
	
	handleInputChange(e){					逻辑交互部分!
		this.setState(
			{
				inputValue:e.target.value
			}
		)
	}
}

export default TodoList