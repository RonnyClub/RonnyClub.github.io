//封装一个函数代替
function byId(id){
	return	typeof(id) === "string"?document.getElementById(id):id;
}

console.log(byId("main"));

//全局变量
var index=0,
	timer=null,
	pics=byId("banner").getElementsByTagName("div"),
	dots=byId("dots").getElementsByTagName("span"),
	prev=byId("prev"),
	next=byId("next"),
	len=pics.length,
	menu=byId("menu-content"),
	menuItems=menu.getElementsByClassName("menu-item"),
	subMenu=byId("sub-menu"),
	innerBox=subMenu.getElementsByClassName("inner-box")
	
console.log(pics);
	
//包含所有滑动图片的事件
function slideImg(){
	var main=byId("main");
	//划过清除定时器，离开继续定时器
	main.onmouseover=function(){
		//划过（悬停）清除定时器
		if(timer) clearInterval(timer); 
	}
	main.onmouseout=function(){
		//正常情况下定时滑动
		timer=setInterval(function(){
				index++;
				if(index>=len){
					index=0;
				}
				//切换图片（多个情况都要切换图片，因此定义一个函数）
				changeImg();
			},3000)
	}
	//自动在main上自动触发鼠标离开
	main.onmouseout();
	
	//遍历所有圆点，绑定点击事件(其实就是提取各个被点击标签，用.onclick来检测点击事件)，点击原点切换图片
	for(var d=0;d<len;d++){
		dots[d].id=d;
		dots[d].onclick=function(){
			//改变index为当前索引
			index=this.id;
			changeImg();
		}
	}
	
	next.onclick=function(){
		index++;
		if(index>=len) index=0;
		changeImg();
	}
	
	prev.onclick=function(){
		index--;
		if(index<0) index=len-1;
		changeImg();
	}
	//遍历主菜单，绑定事件
	for(var m=0;m<menuItems.length;m++){
		menuItems[m].setAttribute("data-index",m)
		innerBox[m].style.display='none';
		menuItems[m].onmouseover=function(){
			//给每一个menu-item定义一个data-index属性，作为索引
			var idx=this.getAttribute("data-index");
			for (var j=0;j<innerBox.length;j++) {
				innerBox[j].style.display='none';
			}
			subMenu.className="sub-menu";
			innerBox[idx].style.display='block';
		}
	}
	
	menu.onmouseout=function(){
		subMenu.className="sub-menu hide";
		subMenu.onmouseover=function(){
		this.className="sub-menu";
	}
	}
	
	subMenu.onmouseout=function(){
		this.className="sub-menu hide";
	}
	
}



function changeImg(){
	//遍历banner下所有的div，使其全部隐藏
	for (var i=0;i<len;i++) {
		pics[i].style.display='none';
		dots[i].className="";
	}
	pics[index].style.display='block';
	dots[index].className="active";

}

slideImg();
