css代码:



.show{
	animation: show-item 2s ease-in forwards;		添加forwards将保留动画最后一帧的状态
}

.hide{
	animation: hide-item 2s ease-in forwards;
}

@keyframes show-item{
	0%{
		opacity: 0;
		color: red;
	}
	50%{
		opacity: 0.5;
		color: green;
	}
	100%{
		opacity: 1;
		color: blue;
	}
	
}

@keyframes hide-item{
	0%{
		opacity: 1;
		color: red;
	}
	50%{
		opacity: 0.5;
		color: green;
	}
	100%{
		opacity: 0;
		color: blue;
	}
	
}