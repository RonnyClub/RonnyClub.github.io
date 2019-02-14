1/ 父组件向子组件传值

父组件中将值定义在属性中
子组件中用 this.props.content 使用这个值
-------------------------
父组件:
return (
		<div>
			<TodoItem content={item}/>
		</div>	
		)
-------------------------
子组件:
import React,{Component} from 'react';

class TodoItem extends Component {
	render(){
		return <div>{this.props.content}</div>
	}
}

export default TodoItem
-------------------------

2/子组件调用父组件的方法

首先,我只能说,在react中使用方法时,务必注意是否需要加 .bind(this)
其二,注意
constructor(props){
		super(props);
		this.handleClick=this.handleClick.bind(this);
	}
据说这样提前 .bind(this) 可以帮助优化

三,子组件使用父组件的 方法 和 数据
		this.props.deleteItem(this.props.index)
--------------------------------
父组件(DOM)
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
				</div>	
			)
		})
	}
</ul>
--------------------------------
父组件(方法)
	
	handleItemClick(index){
		const list=[...this.state.list]
		list.splice(index,1)
		
		this.setState({
			list:list
		})
	}
--------------------------------
子组件(DOM)

constructor(props){
		super(props);
		this.handleClick=this.handleClick.bind(this);
	}


render(){
		return <div onClick={this.handleClick}>{this.props.content}</div>
	}

--------------------------------
子组件(方法)

handleClick(){
		this.props.deleteItem(this.props.index)
	}
