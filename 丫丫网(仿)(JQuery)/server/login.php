<?php
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];

$db=mysqli_connect("127.0.0.1","root","","yaya");

$sql = "SELECT * FROM `usertable` WHERE username='$username'";
$result=mysqli_query($db,$sql);

if(mysqli_num_rows($result)==0){
    echo '{"strtus":"error","msg":"用户名不存在！！！"}';
}else{
    $data=mysqli_fetch_all($result,MYSQLI_ASSOC);
    $_password=$data[0]["password"];
    if($_password!=$password){
        echo '{"status":"error","msg":"对不起，您的密码不正确！"}';
    }else{
        echo '{"status":"success","msg":"登录成功！！！"}';
    }
}
?>