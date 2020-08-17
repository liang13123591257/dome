<?php
  # 先链接数据库
  header("Content-type:text/html;charset=utf-8");
  $db = mysqli_connect("127.0.0.1","root","","yaya");
$db->query("SET NAMES utf8");
  # 编写SQL语句查询数据库中的数据
  # 第一页 0
  # 第二页 20
  # 第三页 40
  # 第N页  (n-1) * 20
 

  $type = $_REQUEST["type"];
  if($type == "zh"){
    $sql = "SELECT  * FROM list ORDER BY evaluate DESC";
  }elseif($type == "jg"){
    $sql = "SELECT  * FROM list ORDER BY price DESC";
  }elseif($type == "zx"){
    $sql = "SELECT  * FROM list ORDER BY title DESC";
  }elseif ($type == "qj") {
      $zx=$_REQUEST["zx"];
      $zd=$_REQUEST["zd"];
      $zxs=intval($zx);
      $zds=intval($zd);
    $sql ="SELECT * from list  where $zxs< price and price <$zds ORDER BY price ASC";
  }

  $result = mysqli_query($db,$sql);
  $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
  echo json_encode($data,true);
?>