<?php
header("Content-Type: text/html; charset=utf-8");
// $rank = $_REQUEST["rank"];

// $db = mysqli_connect("127.0.0.1","root","","taoshuwang");

$str = file_get_contents("../json/content_nohref.json");
echo $str;

?>