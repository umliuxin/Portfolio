<?php 
	$name=$_POST['name'];
	$email=$_POST['email'];
	$message=$_POST['message'];
	$in=array($name,$email,$message);
	$file = fopen("message.csv","a");
	fputcsv($file, $in);
	fclose($file);
 ?>