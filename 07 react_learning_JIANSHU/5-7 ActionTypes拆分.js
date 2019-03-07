为什么要拆分?
	原来的action的type是一一对应,用字符串来写出来的
	一旦写错字母,不会报错,难以调试
	如果写到单独文件中,定义为常量,写错了会报错,容易调试和维护

-------------------------------------------------------------------

实现:

(ActionTypes.js)-----

export const CHANGE_INOUT_VALUE = 'change_input_value';
export const ADD_TODO_ITEM = 'add_todo_item';
export const DELETE_TODO_ITEM = 'delete_todo_item';


(其他)------
引入:	import {CHANGE_INOUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/ActionTypes.js',

使用,直接使用 CHANGE_INOUT_VALUE 这些就好
