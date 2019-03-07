import {CHANGE_INOUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,GET_AJAX_DATA} from './ActionTypes.js'


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

export const getAjaxDataAction = (data) => (
	{
		type:GET_AJAX_DATA,
		data
	}
)
