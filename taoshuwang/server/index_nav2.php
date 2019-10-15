<?php
$db = mysqli_connect("127.0.0.1","root","","taoshuwang");
$sql = "SELECT name FROM index_nav2 ";
$res = mysqli_query($db, $sql);
$data = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($data,true);
?>