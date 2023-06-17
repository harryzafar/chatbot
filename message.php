<?php
 $conn = mysqli_connect('localhost','root','','chatbot') or die("Database connection failed");
 $userMsg = mysqli_real_escape_string($conn, $_POST['text']);

 $check_data = "SELECT answers FROM messages WHERE queries LIKE '%$userMsg%'";
 $result = mysqli_query($conn, $check_data) or die("Error");
  if(mysqli_num_rows($result) > 0){
  $fetch_data = mysqli_fetch_assoc($result);
  echo $fetch_data['answers'];
  
  }
  else{
    echo "Sorry! I am unable to understand you.";
  };
?>