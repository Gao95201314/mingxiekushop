<?php
	include("../public.php");
	$db=getConnect("mingxie");
	$uname=$_GET["uname"];
	$sql="select uname from user where uname='$uname'";
	$result=mysqli_query($db,$sql);
	$row=mysqli_fetch_array($result);
	if($row){
		//1代表用户名存在
		echo 1;
		
	}else{//0代表用户名不存在
		echo 0;
	}

	?>