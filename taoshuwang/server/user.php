<?php
header("Content-Type: text/html; charset=utf-8");
$user = $_REQUEST["username"];
$db = mysqli_connect("127.0.0.1","root","","taoshuwang");
$sql = "SELECT * FROM user WHERE username='$user' ";
$result = mysqli_query($db, $sql);
// print_r(mysqli_num_rows($result));
$response = array("status"=>"","msg"=>"");
if(mysqli_num_rows($result)>=1){
    /*用户名已被注册*/
    $response["status"] = "error";
    $response["msg"] = " 该用户名已经被注册！！";
    echo json_encode($response,true);
}else{
    $response["status"] = "ok";
    $response["msg"] = "可注册用户";
    echo json_encode($response,true);
}
?>  