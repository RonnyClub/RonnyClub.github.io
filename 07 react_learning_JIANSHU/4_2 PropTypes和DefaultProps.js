1/ 引入PropTypes校验包 并使用

import PropTypes from 'prop-types';

TodoItem.propTypes={
	test:PropTypes.arrayOf(PropTypes.number,PropTypes.string),	//允许传递多个类型props
	content:PropTypes.string.isRequired,  //isRequired要求必须传递这个参数
	deleteItem:PropTypes.func,
	index:PropTypes.number
}

//设置默认值
TodoItem.defaultProps={
	test:'hello'
}
