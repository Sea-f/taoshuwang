<?php
header("Content-Type: text/html; charset=utf-8");
$db = mysqli_connect("127.0.0.1","root","","taoshuwang");
$id = $_REQUEST["id"];
$click = $_REQUEST["click"];
if($click=="plus"){
    $sql1="SELECT math FROM shop_car WHERE shop_id=$id";
    $res1 = mysqli_query($db, $sql1);
    $data = mysqli_fetch_all($res1,MYSQLI_ASSOC);
    foreach($data as $value){
        $number= $value['math']+1;
    }
    $update = "UPDATE shop_car
    SET math=$number
    WHERE shop_id=$id";
    $res = mysqli_query($db, $update);
    echo true;
}else {
    $sql1="SELECT math FROM shop_car WHERE shop_id=$id";
    $res1 = mysqli_query($db, $sql1);
    $data = mysqli_fetch_all($res1,MYSQLI_ASSOC);
    foreach($data as $value){
        $number= $value['math']-1;
    }
    $update = "UPDATE shop_car
    SET math=$number
    WHERE shop_id=$id";
    $res = mysqli_query($db, $update);
    echo true;
}

?>