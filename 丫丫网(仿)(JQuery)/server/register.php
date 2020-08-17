<?php
$db = mysqli_connect("127.0.0.1", "root", "","yaya");

$username = $_REQUEST["name"];
$password = $_REQUEST["password"];
$phone    = $_REQUEST["phone"];

$sql = "SELECT * FROM usertable WHERE username='$username'";
$result = mysqli_query($db,$sql);

if(mysqli_num_rows($result) == 0)
{

  $sql = "INSERT INTO `yaya`.`usertable` (`username`, `password`, `phone`) VALUES ( '$username', '$password', '$phone')";
  $result = mysqli_query($db, $sql);
  $arr = array("status"=>"success","msg"=> "恭喜你，注册成功！");
  echo json_encode($arr);
}else{
 
  echo '{"status":"error","msg":"该用户名已经被注册！！"}';
}


?>