<?php 
/* serverConnect enable webpage to access server */
include "serverConnect.php"; 
/* User input datas */
getTitle ();
getArtist();
getLink(); 
/* Perform task of adding data into database */
processRequest();
/* Get input datas from user entered inside the form */
function getTitle ( )  {
    return $_POST["title"];
}

function getArtist ( )  {
    return $_POST["artist"];
}

function getLink ( ) {
    
/* Converting local file path into url enable file store inside local server accessible  */
        return pathtoUrl($_POST["link"]);
   

}
function pathtoUrl($path) {
    /* Conversion process from local path to url */
    $path = str_replace('"', "", $path);
    $path = str_replace('\\', "/", $path);
    $path = str_replace("C:/wamp64/www", "http://localhost" , $path);
    return $path;
}

function processRequest () {
    /* Storing data into local variable*/
    $title = getTitle();
    $artist= getArtist();
    $link= getLink();
    /* Performing insertion operation*/
    $sql = "INSERT INTO playlist (title, artist, link) VALUES ('$title', '$artist', '$link')";
    
    if (connection()->query($sql) === TRUE) {
        //echo "New record created successfully";
       
    } else {
        echo "Error: " . $sql . "<br>" . connection()->error;
    }
    connection()->close();
}

?>