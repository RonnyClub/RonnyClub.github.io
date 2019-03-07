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