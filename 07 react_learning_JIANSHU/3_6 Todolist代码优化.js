1/ ES6写法:

--------------------------
原来:
render(){
		return <div onClick={this.handleClick}>{this.props.content}</div>
	}
--------------------------
新:

render(){
		const { content }=this.props;
		return <div onClick={this.handleClick}>
			{content}
		</div>
	}

-------------------------
原来:
handleClick(){
		this.props.deleteItem(this.props.index)
	}
-------------------------
新:
handleClick(){
		const {deleteItem,index}=this.props;
		deleteItem(index);
	}


----------------------------------------------------------------
2/ .bind(this)写在constructor里面

	this.handleInputChange=this.handleInputChange.bind(this);
	this.handleBtnClick=this.handleBtnClick.bind(this);
	this.handleItemClick=this.handleItemClick.bind(this);

----------------------------------------------------------------
3/代码结构化:
	
<ul>
	{this.getItemList()}
</ul>
------------------------
getItemList(){
		return (
			this.state.list.map((item,index)=>{
							return (
								<div>
									<TodoItem 
										content={item} 
										index={index}
										deleteItem={this.handleItemClick}
									/>
								</div>	
							)
						})
		)
	}
	

----------------------------------------------------------
4/ this.setState()代码优化
------------
原来:
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

-----------------------
修改:

//this.setState()中传入函数,使用箭头函数
handleInputChange(e){
		this.setState(()=>{
			return {
				inputValue:e.target.value
				}
		})
	}


//用prevState代替this.state		就这么用,说是可以避免改变this.state
handleBtnClick(){
		this.setState((prevState)=>(
			{list:[...prevState.list,prevState.inputValue]}
		))
	}



----------------------------------------------------------------
5/key值应该加在return的DOM 的最外层
return (
		<TodoItem 
			key={index}
			content={item} 
			index={index}
			deleteItem={this.handleItemClick}
		/>
)