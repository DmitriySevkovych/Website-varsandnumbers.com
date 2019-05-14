<?php
  if(!isset($_POST['#submit'])){
    echo "test post not set on submit!";
  }

  $visitor_name = $_POST['name'];
  $visitor_email = $_POST["email"];

  echo $visitor_name;

?>
