1/ store是唯一的

2/ 只有store自己能改变自己的内容

	reducer可以接受state,但是不能修改之
	reducer中定义的都是纯函数:即固定输入,固定输出,中间不能有 new date()这种,或者是ajax请求这种