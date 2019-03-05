使用Ant Design实现页面布局

1/ 安装Ant Design
(项目目录命令行下)
npm install antd --save

2/ 使用第一步:引入css

	import 'antd/dist/antd.css';

3/ 小案例:input框

引入{input}组件:
	import {Input} from 'antd'
使用Input:
	<Input placeholder="todo content" style={{width:'300px',marginRight:'30px'}} />
		Input 一定要注意这里是大写

4/ 同样的,添加button

	import {Input,Button} from 'antd'
	
	<Button type="primary">提交</Button>

5/ 使用列表List

用于显示的全局数据
const data = [
	  'Racing car sprays burning fuel into crowd.',
	  'Japanese princess to wed commoner.',
	  'Australian walks 100km after outback crash.',
	  'Man charged over missing wedding girl.',
	  'Los Angeles battles huge wildfires.',
	];
	
列表组件List使用:
	<List
	  style={{width:'300px',marginTop:'10px'}}
	  header={<div>Header</div>}		头部
	  footer={<div>Footer</div>}		尾部
	  bordered						是否有边框
	  dataSource={data}				渲染的数据
	  renderItem={item => (<List.Item>{item}</List.Item>)}
	/>