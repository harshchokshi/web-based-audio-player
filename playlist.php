<?php
/* serverConnect enable webpage to access server */
include "serverConnect.php"; 
print "<div id = \" playlist \" >";
print "<ol>";
displayList();
print "</ol>";
print "</div>";

function displayList () {
    /* Display the result of SQL QUERY */
    $sql = "SELECT title, artist, link FROM playlist";
    $result = connection()->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $title  = $row["title"];
            $link   = $row["link"];
            $artist = $row["artist"];
            print "<li><a class = \"  \" href=\"$link\">".$artist. " - " .$title."</a></li>";
        }
    } else {
        echo "0 results";
    }
    connection()->close();
}
/* External Java script attach to control audio player
   Whenever new track is added into the list.
   Java script will get refresh resulting into increase in index of playlist length. 
   User can able to play newly added track at current session.
   Moreover, player will able to play last newly added song without any interruption.
   Whenever playlist.php get refresh simultaneously java script will also get refresh.
*/
?>

<script src="refresh.js"> </script>