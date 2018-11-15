<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script id = "refresh" src = "audioPlayer.js"> </script>
<script src = "ajax.js"> </script>
<style>
   .next {
    position: relative;
    left:8em;
    
   }

    .add {
    position: relative;
    right:5em;
    
   }
    a {
        color: black;
        text-decoration: none;
    }
    .ajax {
        display:block;
    }
    form {
        display:none;
    }


</style>
</head>
<body>
<p id = "presentSong"> </p>
<div id = "music">
<audio id="audio" controls="controls" autoplay='autoplay'>
    <source id="audioSource" src="" type="audio/mpeg">
</audio> 
</div>
<div>
<button class = "prev"> Previous Song </button> 
<button class = "next"> Next Song </button> 
<button class = "add" > Add Song </button>
</div>

 <p> Playlist </p>
<div id = "insertInto">
        <form action = "addSong.php" method = "POST" class = "" >
        Title: &nbsp; <input id = "title" type = "text" name = "title" class = "inputData"/> &nbsp; &nbsp;
        Artist: &nbsp; <input id = "artist" type = "text" name = "artist" class = "inputData" /> &nbsp; &nbsp;
        Location: <input id = "link" type = "text" name = "link" class = "inputData"/> &nbsp; &nbsp;
        <input type = "submit" name="save" value = "Submit"/ class = "submit_button">
        </form>
</div>
<p id = "result"></p>
<div id="show"></div>
<div id="tracklist" style="overflow:scroll; height:400px;">
<?php require_once "playlist.php"; ?>
</div>
</body>
</html>