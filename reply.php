<?php
	$name = $_POST["name"];
	if($name == "david")
	{
		$data = array(
            "Name"     => "David",
            "Surname"  => "Lee",
            "Gender"   => "Male",
            "Email"      => "davidkclee1984@gmail.com"
        );
        echo json_encode($data);
	}
	else
	{
		$data = array(
            "Name"     => "Unknown",
            "Surname"  => "Unknown",
            "Gender"   => "Unknown",
            "Email"      => "Unknown"
        );
        echo json_encode($data);
	}
?>