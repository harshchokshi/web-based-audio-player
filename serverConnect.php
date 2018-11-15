<?php

    connection();
    function connection ( ) {
        $servername = "localhost";
        $username = "root";
        $password = "nokia5030";
        $dbname = "songs";
        $conn = new mysqli($servername, $username, $password, $dbname);
        return $conn;
    }
    
    
    // Check connection
    if (connection()->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
   
?>