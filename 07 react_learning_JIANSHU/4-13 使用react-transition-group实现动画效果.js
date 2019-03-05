可以在github上找到这个项目
https://github.com/reactjs/react-transition-group


1/ 安装
(项目目录下)
npm install react-transition-group --save

2/ 主要学习CSSTransition

使用:
	首先引入动画组件
	import { CSSTransition } from 'react-transition-group';
	
	对需要做动画的元素,进行标签包裹
			<CSSTransition>
				<div>Hello</div>
			</CSSTransition>
			
	对<CSSTransition>做一些设置
			<CSSTransition
				in={this.state.show}		设置动画触发指令(设置显示隐藏)
				timeout={1000}				设置动画时间
				className='test'			自定义动画class前缀
			>
				<div>Hello</div>
			</CSSTransition>
		(同时要对css作设置)
			--------------
				.test-enter{
					opacity: 0;
				}

				.test-enter-active{
					opacity: 1;
					transition: opacity 1s ease-in;
				}

				.test-enter-done{
					opacity:1;
				}


				.test-exit{
					opacity:1;
				}

				.test-exit-active{
					opacity: 0;
					transition: opacity 1s ease-in;
				}


				.test-exit-done{
					opacity: 0;
				}
		
			--------------
	不知道什么原因,出错,无法使用
	
	
	3/ 其他:
	还有其他设置项:
	设置是否在元素消失后,取消它的占位
	设置appear属性,增加元素动画钩子函数
	等
	
	4/ 4-14
	利用<TransitionGroup>,让标签包裹中的每一个元素都获得设置好的动画,一般是针对一个列表的元素
	结构:
	<TransitionGroup>
		this.list.map(
			<CSSTransition
				in={this.state.show}		设置动画触发指令(设置显示隐藏)
				timeout={1000}				设置动画时间
				className='test'			自定义动画class前缀
			>
				{循环的元素}
			</CSSTransition>
		)
		
	</TransitionGroup>