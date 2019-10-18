
<?php
header("Content-Type: text/html; charset=utf-8");
$db = mysqli_connect("127.0.0.1","root","","taoshuwang");
mysqli_query($db,"set names 'utf8'");
$id = $_REQUEST["id"];
$math = $_REQUEST["math"];
?>