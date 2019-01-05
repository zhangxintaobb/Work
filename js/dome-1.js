var img1 = document.getElementsByClassName('img1')[0];
		var img2 = document.getElementsByClassName('img2')[0];
		var slider = document.getElementsByClassName('slider')[0];
		var Bimg = document.getElementsByClassName('bimg')[0];
		var box = document.getElementsByClassName('box1-1')[0];
		var img5 = document.getElementsByClassName('img5')[0];
		var img6 = document.getElementsByClassName('img6')[0];
		var box1 = document.getElementsByClassName('box1-1b')[0];
		var box2 = document.getElementsByClassName('box1-1c')[0];
		var img3 = document.getElementsByClassName('img3')[0];
		var img4 = document.getElementsByClassName('img4')[0];
		var i=0;
		var a=0;
		var boxa = document.getElementsByClassName('box1-4')[0];
		var boxb = document.getElementsByClassName('box1-4a')[0];
		var imga = document.getElementsByClassName('box1-4-img')[0];
		var p = document.getElementsByClassName('box1-p8')[0];
		var add = document.getElementsByClassName('box1-5-3')[0];
		var num = document.getElementsByClassName('box1-5-2')[0].firstElementChild;
		var del = document.getElementsByClassName('box1-5-1')[0];
		var n=1;
		var buy = document.getElementsByClassName('box1-8')[0];
		var men3 = document.getElementsByClassName('men3')[0];
        var del1 =document.getElementsByClassName('men-p1')[0];
        var men1=document.getElementsByClassName('men1')[0];
        var men2=document.getElementsByClassName('men2')[0];
        var men = document.getElementsByClassName('men')[0];
        var zhezhao = document.getElementsByClassName('zhezhao')[0];
        buy.onclick=function(){
            zhezhao.style.display="block";
            men.style.display="block";
        }
        men1.onclick=function(){
            men.style.display="none";
            men3.style.display="none";
        }
        del1.onclick=function(){
        	console.log(1);
        	men.style.display="none";
            men3.style.display="none";	
        }
        men2.onclick=function(){
        	men.style.display="none";
            men3.style.display="none";		
        }
		add.onmousemove = function(){
			if(n==5){
				add.style.cursor = "not-allowed";
			}
			else{
				add.style.cursor = "pointer"
			}
		}
		del.onmousemove = function(){
			if(n==1){
				del.style.cursor = "not-allowed";
			}
			else{
				del.style.cursor = "pointer";
			}
		}
		add.onclick = function(){
			n++;
			num.innerHTML = ""+n;
		}
		del.onclick = function(){
			n--;
			num.innerHTML = ""+n;
		}
		var imgb = new Image(); 
		imgb.setAttribute("src",imga.src);
		imgb.style.float = "right";
		boxa.onclick = function(){
			if(a==1){
			boxa.appendChild(imga);
			p.innerHTML = "150ml";
			boxa.style.border = "1px solid #ff9003";
			boxb.style.border = "none";
			boxb.removeChild(imgb);
			a--;
			}
		}
		boxb.onclick = function(){
			if(a==0){
				boxb.appendChild(imgb);
				p.innerHTML = "200ml";
				boxb.style.border = "1px solid #ff9003";
				boxa.style.border = "none";
				boxa.removeChild(imga);
				a++;
			}
		}
		img5.onmouseover = function(){
			box1.style.border = '1px solid #ff9003';
			box2.style.border = 'none';
			img1.firstElementChild.src = ".."+"\\"+"img"+"\\"+"pp0.jpeg";
			Bimg.src = ".."+"\\"+"img"+"\\"+"pp0.jpeg";
		}
		img6.onmouseover = function(){
			box2.style.border = '1px solid #ff9003';
			box1.style.border = 'none';
			img1.firstElementChild.src =".."+"\\"+"img"+"\\"+"pp1.jpeg";
			Bimg.src = ".."+"\\"+"img"+"\\"+"pp1.jpeg";
		}
		img3.onclick = function(){
			if(i==0){
				Bimg.src = ".."+"\\"+"img"+"\\"+"pp1.jpeg";
				img1.firstElementChild.src = ".."+"\\"+"img"+"\\"+"pp1.jpeg";
				box2.style.border = '1px solid #ff9003';
				box1.style.border = 'none';
				i++;
			}
			else{
				img1.firstElementChild.src = ".."+"\\"+"img"+"\\"+"pp0.jpeg";
				Bimg.src = ".."+"\\"+"img"+"\\"+"pp0.jpeg";
				box1.style.border = '1px solid #ff9003';
				box2.style.border = 'none';
				i--;
			}
		}
		img4.onclick = function(){
			if(i==1){
				Bimg.src = ".."+"\\"+"img"+"\\"+"pp0.jpeg";
				img1.firstElementChild.src = ".."+"\\"+"img"+"\\"+"pp0.jpeg";
				box1.style.border = '1px solid #ff9003';
				box2.style.border = 'none';
				i--;
			}
			else{
				img1.firstElementChild.src = ".."+"\\"+"img"+"\\"+"pp1.jpeg";
				Bimg.src = ".."+"\\"+"img"+"\\"+"pp1.jpeg";
				box2.style.border = '1px solid #ff9003';
				box1.style.border = 'none';
				i++;
			}
		}
		img1.onmouseover = function(){
			slider.style.display = 'block';
			img2.style.display = 'block';
		}
		img1.onmouseout = function () {
			slider.style.display = 'none';
			img2.style.display = 'none';
		}
		img1.onmousemove = function (ev) {
			var ev = ev || window.event;

			var oL = ev.clientX - box.offsetLeft - slider.offsetWidth / 2;
			var oT = ev.clientY - box.offsetTop - slider.offsetHeight / 2;

			var oMaxw = img1.offsetWidth - slider.offsetWidth;
			var oMaxh = img1.offsetHeight - slider.offsetHeight;

			oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
			oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

			slider.style.left = oL + 'px';
			slider.style.top = oT + 'px';

			var scale = img2.offsetWidth / slider.offsetWidth;
			Bimg.style.left = -scale * oL + 'px'
			Bimg.style.top = -scale * oT + 'px'
		}
