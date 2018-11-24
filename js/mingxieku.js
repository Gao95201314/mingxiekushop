//轮播图
var banner=document.getElementById("banner");
var oUl = banner.getElementsByTagName("ul")[0];
var liArr=banner.getElementsByTagName("li");
var imgbtn=document.getElementById("imgbtn");
var aArr=imgbtn.children;
var iw=liArr[0].offsetWidth;
oUl.style.width=liArr.length*iw+"px";
var num=0;
//自动轮播
	   var timer=setInterval(autoplay,2000);
	   function autoplay(){
	   	if(num==liArr.length-1){
	   		num=1;
	   		oUl.style.left=0;
	   	}else{
	   		num++;
	   	}
	   	animate(oUl,{left:-iw*num});
	   	for(var i=0;i<aArr.length;i++){
	   		aArr[i].className="";
	   	}
	   	aArr[num>3?0:num].className="active";
	   }
	 //鼠标移入显示和停止轮播
	 banner.onmouseover=function(){
	 	clearInterval(timer);
	 	
	 }
	 //鼠标移出隐藏和开始轮播
	 banner.onmouseout=function(){
	 	timer=setInterval(autoplay,2000);
	 }
	 //选项卡
       for(var i=0;i<aArr.length;i++){
		aArr[i].index=i;
		aArr[i].onmouseover=function(){
			for(var i=0;i<aArr.length;i++){
				aArr[i].className="";
		}
			this.className="active";
			animate(oUl,{left:-iw*this.index});
			num=this.index;
	}
	}