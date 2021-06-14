<?php
    if($lanBtn=$_POST["lanBtn"]){
        echo $lanBtn."123";
        header("Location:profile".$lanBtn.".html");
    }else if(empty($_POST["lanBtn"])){
        header("Location:profileTW.html");
    }
?>