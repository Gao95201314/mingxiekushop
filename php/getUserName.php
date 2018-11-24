<?php
	include("../public.php");
	$db=getConnect("mingxie");
	$uname=$_GET["uname"];
	$sql="select * from user where uname='$uname'";
	$result=mysqli_query($db,$sql);
	$row=mysqli_fetch_array($result);
	if($row){//表示用户名存在
		echo $uname;
	}else{
		echo 0;
	}
	?>