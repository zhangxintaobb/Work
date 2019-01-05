

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
var box = document.getElementById('box');
		var slider = document.getElementById('slider');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var oNavlist = document.getElementById('nav').children;
		var index = 1; //打开页面生效的图片的下标为1
		var timer;
		var isMoving = false;
		var timer = setInterval(function(){
			index++;
			animate(slider,{left:-800*index},function(){
				if (index === 7) {
					slider.style.left ="-800px";
					index =1;
				}
			});
		},2000);
		box.onmouseover = function(){
			animate(left,{opacity:50})
			animate(right,{opacity:50})
			clearInterval(timer)
		}
		box.onmouseout = function(){
			animate(left,{opacity:0})
			animate(right,{opacity:0})
			timer = setInterval(next,3000);
		}
		function next(){
			index++;
			animate(slider,{left:-800*index},function(){
				if (index === 7) {
					slider.style.left ="-800px";
					index =1;
				}
			});
		}
		function prev(){
			index--;
			animate(slider,{left:-800*index},function(){
				if (index === 0) {
					slider.style.left ="-5600px";
					index =6;
				}
			});
		}
		right.onclick = next;
		left.onclick = prev;
		
		
		// //按钮点击切换事件

		for (var i = 0; i < oNavlist.length; i++) {
			oNavlist[i].idx =i;
			oNavlist[i].onclick = function(){
				index = this.idx +1;
				navChange();
				animate(slider,{left:-800*index})
			}
		}
		function navChange(){
			for (var i = 0; i < oNavlist.length; i++) {
				oNavlist[i].className='';}
			if(index===7){
				oNavlist[0].className = 'active';
			}
			else{
				oNavlist[index-1].className = 'active';	
			}
		}
		// }
		// //图片切换时按钮样式跟着切换
		// function navmove() {
		// 	for (var i = 0; i < oNavlist.length; i++) {
		// 		oNavlist[i].className = "";
		// 	}
		// 	if (index > 6) {
		// 		oNavlist[0].className = "active";
		// 	} else if (index <= 0) {
		// 		oNavlist[4].className = "active";
		// 	} else {
		// 		oNavlist[index - 1].className = "active";
		// 	}
		// }
		// //页面打开时自动滚动切换
		// timer = setInterval(next, 3000);













