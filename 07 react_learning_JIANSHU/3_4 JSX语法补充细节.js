1/ 在JSX中写注释(两种方法)

		<Fragment>
		{/*这是一种注释的书写方法*/}
		{
			//这是第二种注释书写方法
		}
			<input 
				value={this.state.inputValue}
				onChange={this.handleInputChange.bind(this)}
			/>
			<button onClick={this.handleBtnClick.bind(this)}>提交</button>
			<ul>
				{
					this.state.list.map((item,index)=>{
						return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
					})
				}
			</ul>
		</Fragment>
		

--------------------------------
2/ 给标签定义class名称 (用className)
			<input 
				className="input"
				value={this.state.inputValue}
				onChange={this.handleInputChange.bind(this)}
			/>
			
--------------------------------
3/ 用类似innerHTML方式写入文本(标签不转义)
	dangerouslySetInnerHTML={{__html:item}}
	
	<li 
		key={index} 
		onClick={this.handleItemClick.bind(this,index)}
		dangerouslySetInnerHTML={{__html:item}}		两个花括号--外层花括号:我将要写入js逻辑,内层花括号:这里是一个js对象
	>
	
	</li>
	
	
-------------------------
4/JSX中使用<label>标签相似功能
		
	<label>中的htmlFor 和 <input /> 中的id 需要相同
				
	<label htmlFor='inputArea'>输入内容</label>
	<input 
		id='inputArea'
		value={this.state.inputValue}
		onChange={this.handleInputChange.bind(this)}
	/>
