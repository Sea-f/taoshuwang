<?php
header("Content-Type: text/html; charset=utf-8");
$db = mysqli_connect("127.0.0.1","root","","taoshuwang");
$id = $_REQUEST["id"];
$sql = "DELETE FROM shop_car
WHERE shop_id=$id";
$res = mysqli_query($db, $sql);
echo true;
?>