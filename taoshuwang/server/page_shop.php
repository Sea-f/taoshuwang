<?php

$db = mysqli_connect("127.0.0.1", "root", "", "taoshuwang");
mysqli_query($db,"set names 'utf8'");
$id = $_REQUEST["id"];
# 02-查询获取数据库所有的数据
$sql = "SELECT * FROM list WHERE id = '$id'";
$res = mysqli_query($db, $sql);
$data = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($data,true);
?>