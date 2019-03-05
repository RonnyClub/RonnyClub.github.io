mock 模拟的

1/ 安装Charles

官网下载安装: https://www.charlesproxy.com/download/



2/ 模拟数据 并 请求

第一步: 在桌面创建一个 (todolist.json)文件,里面写上模拟数据

(模拟数据:)	["dell","Lee","professional"]

第二步: 需求:当我们请求数据时,我们希望返回 todolist.json 文件

(Charles软件中) MapLocal功能:设置访问端口和转接文件
				记得勾选 Enable MapLocal

在此向这个端口请求此文件,将转接到对应文件,成功请求



3/ 获得请求成功的数据

componentDidMount(){
	axios.get('/api/todolist')
		.then((res)=>{
			console.log(res.data)
		})
		.catch(()=>{alert("error")})
}


用setState使用数据:
componentDidMount(){
	axios.get('/api/todolist')
		.then((res)=>{
			console.log(res.data)
			this.setState(()=>{
				return {
					list:res.data
				}
			}
		})
		.catch(()=>{alert("error")})
}

