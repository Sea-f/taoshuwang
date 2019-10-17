<?php
header("Content-Type: text/html; charset=utf-8");
$db = mysqli_connect("127.0.0.1","root","","taoshuwang");
$sql = "SELECT * FROM index_new_book ";
$res = mysqli_query($db, $sql);
$data = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($data,true);
?>