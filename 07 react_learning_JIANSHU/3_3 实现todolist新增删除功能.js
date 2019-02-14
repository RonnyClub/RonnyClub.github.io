1/ 循环列表的方式展示数据
		<ul>
			{
				this.state.list.map((item,index)=>{
					return <li>{item}</li>
				})
			}
		</ul>
		
---------总代码(一)--------------
import React,{Component,Fragment} from 'react';

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
			<div>
				<input 
					value={this.state.inputValue}
					onChange={this.handleInputChange.bind(this)}
				/>
				<button onClick={this.handleBtnClick.bind(this)}>提交</button>
				<ul>
					{
						this.state.list.map((item,index)=>{
							return <li>{item}</li>
						})
					}
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
	
	handleBtnClick(){
		
	}
}

export default TodoList

---------------------------------------
2/ ES6语法:展开运算符

handleBtnClick(){
		this.setState(
			{
				list:[...this.state.list,this.state.inputValue]
			}
		)
	}

--------------------------------------
3/为循环标签添加key值
		<ul>
			{
				this.state.list.map((item,index)=>{
					return <li key={index}>{item}</li>
				})
			}
		</ul>
		

--------------------------------------
4/ 删除功能
	
		<ul>
			{
				this.state.list.map((item,index)=>{
					return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
				})
			}
		</ul>
		
		
	(处理函数)
handleItemClick(index){
	
	React中不宜直接修改state内容(不利于后面性能优化),因此拷贝一份list之后再做修改
		const list=[...this.state.list]
		list.splice(index,1)
		
		this.setState({
			list:list
		})
	}