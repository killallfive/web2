window.onload = function(){
	var cover = document.getElementById('cover');
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st > 180){
			cover.style.position = 'fixed';
		}else{
			cover.style.position = 'static';
		}
	}
}
function getStyle(obj, attr) { //返回值带有单位px
  if (obj.currentStyle) {
  	return obj.currentStyle[attr];
  } else {
  	return getComputedStyle(obj, null)[attr];
  }
}
function animate(obj, json, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
  	var flag = true;
  	for (var attr in json) {
  		(function (attr) {
  			if (attr == "opacity") {
  				var now = parseInt(getStyle(obj, attr) * 100);
  				var dest = json[attr] * 100;
  			} else {
  				var now = parseInt(getStyle(obj, attr));
  				var dest = json[attr];
  			}
  			var speed = (dest - now) / 6;
 				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if (now != dest) {
 					flag = false;
 					if (attr == "opacity") {
 						obj.style[attr] = (now + speed) / 100;
					} else {
						obj.style[attr] = now + speed + "px";
					}
				}
			})(attr);
		}
		if (flag) {
			clearInterval(obj.timer);
			callback && callback(); //如果回调函数存在，就调用回调函数
		}
	}, 30);
}
var scrolling = document.getElementsByClassName("shou");
var num = 0;
var time = setInterval(function(){
    num--;
    scrolling[0].style.marginTop=num+"px";
    if(num<=-385){
        num=0;
    }
},30);