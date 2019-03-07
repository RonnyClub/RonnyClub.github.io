import React,{Component,Fragment} from 'react'
import './AppStyle.css'
import './AppStyle2.css'
import CSSTransition from 'react-transition-group'

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
				<div>Hello</div>
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
