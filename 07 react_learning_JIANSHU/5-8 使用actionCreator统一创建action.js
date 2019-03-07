之前在创建action时,我们是直接在函数中定义action变量

在本节中,我们将action的创建写成一个函数,定义在actionCreator.js文件中

这样的方式有利于代码的维护和测试

思路:
	在actionCreator.js中写入各个action函数,在todolist组件中,传入必要的数据即可
	

实现:

	定义ActionCreator--------------
		import {CHANGE_INOUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './ActionTypes.js'

		export const getInputChangeAction = (value) => (
			{
				type:CHANGE_INOUT_VALUE,
				value
			}
		)

		export const addItemAction = () => (
			{
				type:ADD_TODO_ITEM,
			}
		)

		export const deleteItemAction = (index) => (
			{
				type:DELETE_TODO_ITEM,
				index
			}
		)

	
	
	使用---------------------------
		import {getInputChangeAction,addItemAction,deleteItemAction} from './store/ActionCreator.js'


		handleInputChange(e){
			const action = getInputChangeAction(e.target.value)
			store.dispatch(action)
		}
		
		
		handleBtnClick(){
			const action = addItemAction()
			store.dispatch(action)
		}
		
		handleItemDelete(index){
			const action = deleteItemAction(index)
			store.dispatch(action)
		}