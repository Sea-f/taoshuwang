<?php
header("Content-Type: text/html; charset=utf-8");
$db = mysqli_connect("127.0.0.1","root","","taoshuwang");
/* mysqli_query($db,"set names 'utf8'"); */
$id = $_REQUEST["id"];
$math = $_REQUEST["math"];
$price = $_REQUEST["price"];
$old_price = $_REQUEST["old_price"];
$label_tj = $_REQUEST["label_tj"];
$title = $_REQUEST["title"];
$href = $_REQUEST["href"];
$src = $_REQUEST["src"];
/* echo $id ;
echo $math; */
$sql = "SELECT shop_id FROM shop_car WHERE shop_id=$id";
$res = mysqli_query($db, $sql);

if(mysqli_num_rows($res)>=1){
    $sql1="SELECT math FROM shop_car WHERE shop_id=$id";
    $res1 = mysqli_query($db, $sql1);
    $data = mysqli_fetch_all($res1,MYSQLI_ASSOC);
    foreach($data as $value){
        $number= $value['math']+$math;
    }
    $update = "UPDATE shop_car
    SET math=$number
    WHERE shop_id=$id";
    $res = mysqli_query($db, $update);
    echo true;
}elseif(mysqli_num_rows($res)<=0){
    /* echo $id;
    echo $price;
    echo $old_price;
    echo $label_tj;
    echo $title ;
    echo $href; */
    /* $sql2=  "INSERT INTO shop_car (shop_id,price,title,label_tj,math,old_price,href )VALUES($id,$price,"$title",$label_tj,$math,$old_price,"$href")"; */
    $sql2=  "INSERT INTO shop_car (shop_id,price,title,label_tj,math,old_price,href,src )VALUES($id,$price,'$title',$label_tj,$math,$old_price,'$href','$src')";
    $res1 = mysqli_query($db, $sql2);
    echo true;
}
?>