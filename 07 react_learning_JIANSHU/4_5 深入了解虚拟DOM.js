一/虚拟DOM原理:

1/ 获得state数据
2/ 获得JSX模板

3/ 数据+模板 生成虚拟DOM 
	(虚拟DOM就是一个JS对象,用它来描述真实的DOM)(损耗了性能)

4/ 根据虚拟DOM的结构生成真实的DOM,挂载至页面

5/ 若state发生变化

6/ 数据+模板 生成新的虚拟DOM
	(这一步相比于其他,极大的提升性能)

7/ 比较原始虚拟DOM和新的虚拟DOM的区别,找到区别是span中的内容
	(这一步相比于其他,极大的提升性能)

8/ 直接操作DOM,改变span中的内容

------------------------------------------------------
二/比较JSX类dom模板 和 JS对象(了解)
	JSX->createElement->虚拟DOM(JS对象) -> 真实的DOM
	return <div><span>item</span></div>
	return React.createElement('div',{},React.createElement('span',{},'sapn'))


------------------------------------------------------
三/ 虚拟DOM的优点
1.性能提升
2.使得跨端应用得以实现 (React Native)