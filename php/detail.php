<?php
	include("../public.php");
	$id=$_GET["xid"]; 
	$db=getConnect("mingxie");
	$sql="select * from details where xid=$id";
	$result=mysqli_query($db,$sql);
	$row=mysqli_fetch_array($result);
	$json=json_encode($row);
	echo $json;
?>