
window.onload = function(){
	var nav = document.getElementsByClassName('nav')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>150){
			nav.style.position = 'fixed';
		}
		else{
			nav.style.position = 'static';
		}
	}
}



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
	}, 20)
}
var box = document.getElementById('box');
		var slider = document.getElementById('slider');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var oNavlist = document.getElementById('nav-1').children;
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
		},3000);
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
var select = document.getElementsByClassName('select')[0];
var money = document.getElementsByClassName('box-3-2-p2')[0];
select.onchange = function(){
	 for(var i = 0;i < select.length;i++){
            if(select[i].selected){
                money.innerHTML = "¥"+select.value;
            }
        }

}
var na=document.getElementsByClassName('news')[0];
var p1a=document.getElementsByClassName('p1')[0];
var p2a=document.getElementsByClassName('p2')[0];
 p2a.innerHTML=p1a.innerHTML;
//alert(n.offsetHeight+" 1  "+p1.offsetHeight);
var f=function(){
    na.scrollTop++;
    if(na.scrollTop>=p1a.offsetHeight){
        //alert(n.scrollTop+" 1  "+p1.offsetHeight);
        na.scrollTop=0;
    }
}
var ia=setInterval(f,20);
var tz=function(){
    clearInterval(ia);
}
var ks=function(){
    ia=setInterval(f,20);
}
 function mon(){
        var sel = document.getElementById('select');
        var i;
        for(i=0;i<sel.length;i++){
            if(sel[i].selected){
                var txt=sel[i].value;
            }
        }
        return txt;
    }






