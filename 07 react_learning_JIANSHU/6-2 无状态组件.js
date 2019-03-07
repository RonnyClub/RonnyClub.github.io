无状态组件可以优化性能

对于UI组件,即页面中只有render内容时,可以使用无状态组件代替UI组件

普通组件中会有生命周期函数等等各种内容,无状态组件中是一个函数,因此无状态组件性能大大提升

代码:---------------,

(原组件代码)----------------------------------------

	import React,{Component} from 'react'
	import { Input,Button,List  } from 'antd'


	class AntdTodolistUI extends Component{
		render(){
			return (
				<div style={{marginLeft:'30px',marginTop:'30px'}}>
					<div>
						<Input 
							value={this.props.inputValue} 
							placeholder="todo content" 
							style={{width:'300px',marginRight:'30px'}} 
							onChange={this.props.handleInputChange}
						/>
						 <Button 
							type="primary"
							onClick={this.props.handleBtnClick}
						 >
							提交
						 </Button>
					</div>
					
					<List
						  style={{width:'300px',marginTop:'10px'}}
						  header={<div>Header</div>}
						  footer={<div>Footer</div>}
						  bordered
						  dataSource={this.props.list}
						  renderItem={(item,index) => (<List.Item onClick={() => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
					/>
					
				</div>
			)
		}
	}

	export default AntdTodolistUI;

(无状态组件代码)--------------------------------------------

	import React,{Component} from 'react'
	import { Input,Button,List  } from 'antd'

	const AntdTodolistUI = (props) => {
		return (
			<div style={{marginLeft:'30px',marginTop:'30px'}}>
					<div>
						<Input 
							value={props.inputValue} 
							placeholder="todo content" 
							style={{width:'300px',marginRight:'30px'}} 
							onChange={props.handleInputChange}
						/>
						 <Button 
							type="primary"
							onClick={props.handleBtnClick}
						 >
							提交
						 </Button>
					</div>
					
					<List
						  style={{width:'300px',marginTop:'10px'}}
						  header={<div>Header</div>}
						  footer={<div>Footer</div>}
						  bordered
						  dataSource={props.list}
						  renderItem={(item,index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
					/>
					
				</div>
		)
	}

	export default AntdTodolistUI;

