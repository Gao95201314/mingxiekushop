<?php
	include("../public.php");
	$db=getConnect("mingxie");
	$uname=$_POST["uname"];
	$upwd=$_POST["upwd"];
	$sql="select * from user where uname='$uname'";
	$result=mysqli_query($db,$sql);
	$row=mysqli_fetch_array($result);
	if($row){//表示用户名存在
		if($row["upwd"]==$upwd){//验证密码是否正确
		echo "<script>alert('登录成功');location.href='../html/mingxieku.html?uname=$uname'</script>";
		}else{
			echo "<script>alert('密码错误，请重新输入');location.href='../html/login.html'</script>";
		}
	}else{
		echo "<script>alert('同户名不存在');location.href='../html/login.html'</script>";
	}
	
	?>