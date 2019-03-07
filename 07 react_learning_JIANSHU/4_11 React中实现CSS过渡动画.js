1/ 实现思路

对于组件中的<div>元素,定义className,它的值通过对组件中state中定义的show的值来确定

当show为true时,className为show,当show为false时,className为hide

对<button>按钮绑定onClick事件,点击则改变state中show的值,在true和false之间切换

在src目录下创建一个css文件,并在组件文件中引入,css文件中写入对应class需要的效果动画


2/ 代码实现

下面的三个文件都在src目录下并列

(App.js)---------

	import React,{Component,Fragment} from 'react'
	import './AppStyle.css'					!这里引入css

	class App extends Component{
		
		
		constructor(props){
			super(props);
			this.state={
				show:true
			}
		}
		
		render(){
			return (
				<Fragment>
					<div className={this.state.show ? 'show' : 'hide'}>Hello</div>
					<button onClick={this.handleBtnClick.bind(this)}>toggle</button>	
				</Fragment>

			)
		}
		
		handleBtnClick(){
			this.setState(()=>{
				return {
					show:this.state.show ? false : true
				}
			})
		}
		
	}


	export default App;



(AppStyle.css)-----

	.show{
		opacity: 1;
		transition: all 1s ease-in; 
	}

	.hide{
		opacity: 0;
		transition: all 1s ease-in; 
	}



(index.js)----

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));