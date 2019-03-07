react中,通过传递元素下标index,来splice删除list中的某一个数据


ant design 中的 list列表,其中引用组件的部分,可以传入接收index参数
	 <List
	  style={{width:'300px',marginTop:'10px'}}
	  header={<div>Header</div>}
	  footer={<div>Footer</div>}
	  bordered
	  dataSource={this.state.list}				下面这边接收了index参数,在触发函数时也bind了index
	  renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
	/>
	
-------------------------------------------------------------

函数执行:

	handleItemDelete(index){			记得传入参数index
			const action={
				type:'delete_todo_item',
				index:index
			}
			store.dispatch(action)
		}
		
-------------------------------------------------------------

(reducer.js):
	
	if(action.type ==='delete_todo_item'){
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.index,1)
		return newState
	}
	
--------------------------------------------------------------------------------------------------------------------