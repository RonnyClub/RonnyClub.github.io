(index.js)
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


----------------------------------------------------------------------
(TodoList.js)
import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component{
	
	constructor(props){
		super(props);
		this.state={
			inputValue:"嘿嘿嘿",
			list:['嘻嘻嘻','哈哈哈','吼吼吼']
		}
		
	}
	
	render(){
		return(
			<Fragment>
				<label htmlFor='inputArea'>输入内容</label>
				<input 
					id='inputArea'
					value={this.state.inputValue}
					onChange={this.handleInputChange.bind(this)}
				/>
				<button onClick={this.handleBtnClick.bind(this)}>提交</button>
				<ul>
					{
						this.state.list.map((item,index)=>{
							return (
								<div>
								<TodoItem 
									content={item} 
									index={index}
									deleteItem={this.handleItemClick.bind(this)}
								/>
								
								{/*
								  <li 
									key={index} 
									onClick={this.handleItemClick.bind(this,index)}
									dangerouslySetInnerHTML={{__html:item}}
								>	
								</li>
								  * */}
								</div>	
							)
						})
					}
				</ul>
			</Fragment>
		)
	}
	
	handleInputChange(e){
		this.setState(
			{
				inputValue:e.target.value
			}
		)
	}
	
	handleBtnClick(){
		this.setState(
			{
				list:[...this.state.list,this.state.inputValue]
			}
		)
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

----------------------------------------------------------------
(TodoItem.js)
import React,{Component} from 'react';

class TodoItem extends Component {
	
	constructor(props){
		super(props);
		this.handleClick=this.handleClick.bind(this);
	}
	
	render(){
		const { content }=this.props;
		return <div onClick={this.handleClick}>
			{content}
		</div>
	}
	
	handleClick(){
		const {deleteItem,index}=this.props;
		deleteItem(index);
	}
}

export default TodoItem
