1/ 引入PropTypes校验包 并使用

import PropTypes from 'prop-types';	

TodoItem.propTypes={
	test:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),	//允许传递多个类型props
	content:PropTypes.string.isRequired,  //isRequired要求必须传递这个参数
	deleteItem:PropTypes.func,	//要求这是一个函数
	index:PropTypes.number	//要求这是一个数字
}

//设置默认值
TodoItem.defaultProps={
	test:'hello'
}


---------父组件(TodoList.js)--------
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


---------子组件(TodoItem.js)--------

import React,{Component} from 'react';
import PropTypes from 'prop-types';

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

TodoItem.propTypes={
	content:PropTypes.string,
	index:PropTypes.number,
	deleteItem:PropTypes.func
}

export default TodoItem
