<?php
header("Content-Type: text/html; charset=utf-8");
$db = mysqli_connect("127.0.0.1","root","","taoshuwang");
mysqli_query($db,"set names 'utf8'");
$sql = "SELECT name FROM index_hot ";
$res = mysqli_query($db, $sql);
$data = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($data,true);
?>