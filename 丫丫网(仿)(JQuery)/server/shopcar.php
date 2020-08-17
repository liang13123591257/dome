<?php
header("Content-type:text/html;charset=utf-8");
$db = mysqli_connect("127.0.0.1", "root", "","yaya");
$db->query("SET NAMES utf8");

$src = isset($_REQUEST["src"])?$_REQUEST["src"]:"";
$title = isset($_REQUEST["title"])?$_REQUEST["title"]:"";
$price = isset($_REQUEST["price"])?$_REQUEST["price"]:"";
$sumcont=isset($_REQUEST["sumcont"])?$_REQUEST["sumcont"]:"";
$type=isset($_REQUEST["type"])?$_REQUEST["type"]:"";
if($title){
  $sql = "SELECT * FROM shopcar WHERE title='$title'";
  $result = mysqli_query($db,$sql);

if(mysqli_num_rows($result) == 0)
{
  $sql = "INSERT INTO `yaya`.`shopcar` (`src`, `title`, `price`,`sumcont`) VALUES ( '$src', '$title', '$price','$sumcont')";
  $result = mysqli_query($db, $sql);
  $arr = array("status"=>"success","msg"=> "加入购物车成功！");
  echo json_encode($arr);
}elseif($type == "btn"||$type == "jia"){
    $sql = "SELECT  * FROM shopcar WHERE title='$title'";
    $result = mysqli_query($db,$sql);
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    $sl= $row['sumcont'];
    $sqls ="UPDATE shopcar SET  sumcont= $sl+1 WHERE title = '$title'";
    $results = mysqli_query($db,$sqls);
}elseif($type == "jian"){
    $sql = "SELECT  * FROM shopcar WHERE title='$title'";
    $result = mysqli_query($db,$sql);
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    $sl= $row['sumcont'];
    $sqls ="UPDATE shopcar SET sumcont= $sl-1 WHERE title = '$title'";
    $results = mysqli_query($db,$sqls);
}elseif($type=="dele"){
  $sql="DELETE FROM shopcar WHERE price=$price";
  $result = mysqli_query($db,$sql);
  $arr = array("status"=>"success","msg"=> "删除成功！");
  echo json_encode($arr);
}
}elseif($type=="clear"){$sql="DELETE FROM shopcar";
  $result = mysqli_query($db,$sql);}

