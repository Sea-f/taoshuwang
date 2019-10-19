<?php
header("Content-Type: text/html; charset=utf-8");
// $rank = $_REQUEST["rank"];

// $db = mysqli_connect("127.0.0.1","root","","taoshuwang");

$str = file_get_contents("../json/content_nohref.json");
echo $str;
// header("Content-Type: text/html; charset=utf-8");
// $db = mysqli_connect("127.0.0.1","root","","taoshuwang");
// /* mysqli_query($db,"set names 'utf8'"); */
// $sql = "SELECT name FROM index_nav_main ";
// $res = mysqli_query($db, $sql);
// $data = $res->fetch_all(MYSQLI_ASSOC);
// echo json_encode($data,true);
?>