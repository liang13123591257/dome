<?php
header("Content-type:text/html;charset=utf-8");
$db = mysqli_connect("127.0.0.1", "root", "", "yaya");
$db->query("SET NAMES utf8");
# 编写SQL语句查询数据库中的数据
$sql = "SELECT  * FROM shopcar";

# 把数据以JSON格式返回
$result = mysqli_query($db, $sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);

?>