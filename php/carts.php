<?php
	include("../public.php");
	$db=getConnect("mingxie");
	$sql="select * from details ";
	$result=mysqli_query($db, $sql);
	while($row=mysqli_fetch_array($result)){
		$arr[]=$row;
	}
	$json=json_encode($arr);
	echo $json;
	?>