<?php
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Cache-Control: no-cache");
header("Pragma: no-cache");
$choice =$_POST["button"];
$cars = array("Honde", "BMW", "Ferrari");
$bikes = array("Ducaite", "Royal Enfield", "Harley Davidson");
if($choice == "cars") 
{
	echo json_encode($cars);
}
else 
{
	echo json_encode($bikes);
}

?>