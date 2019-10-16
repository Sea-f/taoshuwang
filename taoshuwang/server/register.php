<?php
# （1） 先获取用户提交的参数
$username = $_REQUEST["username"];
$password = $_REQUEST["password"]; 
$email=$_REQUEST["e-mail"];
header("Content-Type: text/html; charset=utf-8");
# (2) 通过PHP代码来操作数据库
# 001 先连接数据库
$db = mysqli_connect("127.0.0.1","root","","taoshuwang");
$insertSql = "INSERT INTO `user` (`id`, `username`, `password`, `e-mail`) VALUES (NULL, '$username', '$password', '$email')";
  $res = mysqli_query($db, $insertSql);
$response = array("status"=>"","msg"=>"");
  $response["status"] = "ok";
  $response["msg"] = " 恭喜您注册成功！";
  echo json_encode($response, true);
?>