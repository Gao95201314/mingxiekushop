	function ajax(obj){//caaa
		var xhr = getXHR();
		//处理ie缓存问题
		obj.url += "?rand=" + new Date().getTime();
	
		//如果请求方式为get，并且传递了数据，把数据放置在url后面
		if(obj.method.toLowerCase() == "get"){
			if(obj.data){
				obj.url += "&" + parameter(obj.data);
			}
		}
		xhr.open(obj.method,obj.url);
		
		if(obj.method.toLowerCase() == "post"){
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			if(obj.data){
				xhr.send(parameter(obj.data));
			}else{
				xhr.send();
			}
		}else{
			xhr.send(null);
		}
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					obj.success(xhr.responseText);
				}else{
					if(obj.erro){
				    obj.erro("响应出错，状态为："+xhr.status+",出错原因"+xhr.statusText);
					}
				}
			}
		}
	}
	function getXHR(){
		var xhr = null;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		return xhr;
	}
	
	function parameter(obj){
		var arr = [];
		for(var item in obj){
			arr.push(item+"="+encodeURIComponent(obj[item]));
		}
		return arr.join("&");	
	}