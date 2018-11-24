//放大镜
/*
	当鼠标移入小图的时候获取到自定义属性的值然后将这个值赋值给大图

 */
var oSmall = document.querySelectorAll(".small");
var omiddle = document.querySelector(".middle");
var omaxImg = document.getElementById("maxImg");
var omax = document.getElementById("max");
var oFilter = document.getElementById("filter");
var oBox = document.getElementById("box");

//第一步给每一个元素添加事件
for(var i=0;i<oSmall.length;i++){
	//当移入当前元素的时候
	oSmall[i].onmouseover = function() {
		//获取当前元素的自定义属性
		var src = this.getAttribute("data-url"); 
		//将获取到的src赋值给大图
		omiddle.src = src;
		omaxImg.src = src;
	}
}
oBox.onmouseover = function(){
	oFilter.style.display = "block";
	omax.style.display = "block";
}
oBox.onmouseout=function(){
	oFilter.style.display="none";
	omax.style.display="none";
	
}
	oBox.onmousemove = function(e){
		var e = e||event;
		var l = e.pageX - oBox.offsetLeft - oFilter.offsetWidth/2;
		var t = e.pageY - oBox.offsetTop - oFilter.offsetHeight/2;
	    var left=oBox.offsetWidth-oFilter.offsetWidth;
	    var top=oBox.offsetHeight-oFilter.offsetHeight;
	
	    l=l<0?0:(l>left?left:l);
	    t=t<0?0:(t>top?top:t);
		oFilter.style.left = l+'px';
		oFilter.style.top = t+'px';

	    var bigImgl=l*omaxImg.offsetWidth/oBox.offsetWidth;
	    var bigImgt=t*omaxImg.offsetHeight/oBox.offsetHeight;
		omaxImg.style.left = -bigImgl+'px';
		omaxImg.style.top = -bigImgt+'px';

	}
////数量
//	function Add(){
//		
//		this.main=document.getElementById("main");
//		this.shuliang=document.getElementById("shuliang")
//		this.init()
//	}
//	Add.prototype.init=function(){
//		var _this=this;
//		this.main.onclick=function(){
//			_this.click()
//		}
//	}
//	Add.prototype.click=function(){
//		var e = e||event;
//      var target=e.target||e.srcElemengt;
//      //防止点击a标签自动在链接后面加#刷新变成undefined
//    	e.preventDefault?e.preventDefault():e.returnValue = false;
//      //加减操作
//      if(target.id=="jia"){
//          target.previousElementSibling.value++
//          console.log(target)
//      }
//      if(target.id=="jian"){
//          if(target.nextElementSibling.value>1){
//              target.nextElementSibling.value--
//
//          }
//      }
//      if(target.id=="add_btn"){
//      	var shuliangVal = document.getElementById("shuliang").value
//      	var img =document.getElementById("img_large")
//      	var price = document.getElementById("price")
//      	
//      	var obj = {
//      		id:id,
//      		number:shuliangVal,
//      		img:img.src,
//      		title:img.alt,
//      		price:price.innerHTML
//      	}
//      	ajax("get","http://localhost/yiyoubai/php/add.php",obj,function(data){
//      		 var data = JSON.parse(data)
//      		var shoppingcart_num = document.getElementsByClassName('shoppingcart_num')
//      		console.log(data)
//      		if(data.status==1){
//      			alert("加入购物车成功")
//      	/*		console.log(shoppingcart_num[0].innerHTML,Number(shuliangVal))
//      			shoppingcart_num[0].innerHTML= Number(shoppingcart_num[0].innerHTML)+Number(shuliangVal)*/
//
//      		}
//
//      	})
//      }
//	}
//	new Add()
//	var top_shoppingcart = document.getElementsByClassName("top_shoppingcart")
//	top_shoppingcart[0].onclick=function(){
//		location.href = "cart.html"
//	}
	
