<?php
    include("../public.php");
    $db=getConnect("mingxie");
	$uname=$_POST["uname"];
	$upwd=$_POST["upwd"];
	$sql="insert into user(uname,upwd) values ('$uname','$upwd')";
	$row=mysqli_query($db,$sql);
	if($row){
		echo "<script>alert('注册成功');location.href='../html/login.html'</script>";
	}else{
		echo "<script>alert('注册失败,请重新注册');location.href='../html/register.html'</script>";
	}
?>