
$(document).ready(function () {


    var link;
    var currentPosition = 0;
    var currentSong;
    var searchString;
  

    $('li a:first').css({ 'color': "blue" });
    $('li a').eq(currentPosition).addClass('playing');
    link = $('li a:first').attr("href");
    $('#audioSource').attr('src', link);
    audio.load();
    audio.play();
    
    findli();
    nextTrack();
    clickedTracked();
    nextButton();
    prevButton();

    function prevButton () {
        $('.prev').click(function () {
            findli();
            currentPosition = currentPosition - 1;
                if (currentPosition < 0 )  {
                    alert("This is the first song of the playlist.");
                    audio.stop();
                    audio.play();
                    
                }
                $('li a').css({ 'color': "black" });
                $('li a').removeClass('playing');
                $('li a').eq(currentPosition).css({ 'color': "blue" });
                $('li a').eq(currentPosition).addClass('playing');
                link = $('li a').eq(currentPosition).attr('href');
                $('#audioSource').attr('src', link);
                audio.load();
                findli();
           });
    }

    function nextButton () {
        $('.next').click(function () {
            findli();
            currentPosition = currentPosition + 1;
                if (currentPosition == $( "li a" ).length )  {
                    currentPosition = 0;
                    $('li a').eq(currentPosition).css({ 'color': "blue" });
                    $('li a').eq(currentPosition).addClass('playing');
                    link = $('li a').eq(currentPosition).attr('href');
                    $('#audioSource').attr('src', link);
                    audio.load();
                    findli();
                }
                $('li a').css({ 'color': "black" });
                $('li a').removeClass('playing');
                $('li a').eq(currentPosition).css({ 'color': "blue" });
                $('li a').eq(currentPosition).addClass('playing');
                link = $('li a').eq(currentPosition).attr('href');
                $('#audioSource').attr('src', link);
                audio.load();
                findli();
           });
    }
    

    

    function findli() {
        $('a').css({ 'background-color': "white" });
        currentSong = $('#audioSource').attr('src');
        searchString = '"' + currentSong + '"';
        $("a[href$=" + searchString + "]").css("color", "blue");
        $("a[href$=" + searchString + "]").addClass('playing');
        var onStreaming = $('.playing').text();
        var someText = "Playing: ";
        $("#presentSong").html(someText.italics()+onStreaming);
        currentPosition = $("a").index($("a[href$=" + searchString + "]"));
        

    }


    function nextTrack() {
        $('audio').on("ended", function () {

                currentPosition = currentPosition + 1;
                if (currentPosition == $( "li a" ).length )  {
                    currentPosition = 0;
                    $('li a').eq(currentPosition).css({ 'color': "blue" });
                    $('li a').eq(currentPosition).addClass('playing');
                    link = $('li a').eq(currentPosition).attr('href');
                    $('#audioSource').attr('src', link);
                    audio.load();
                    findli();
                }
                $('li a').css({ 'color': "black" });
                $('li a').removeClass('playing');
                $('li a').eq(currentPosition).css({ 'color': "blue" });
                $('li a').eq(currentPosition).addClass('playing');
                link = $('li a').eq(currentPosition).attr('href');
                $('#audioSource').attr('src', link);
                audio.load();
                findli();
            
       
        });

    }

    $(".nextTrack").click(function () {
        nextTrack();
   });

   
    function clickedTracked() {
        $('li a').click(function (event) {
            $('a').css({ 'color': "black" });
            $('li a').removeClass('playing');
            $(this).css({ 'color': "blue" });
            $(this).addClass('playing');
            event.preventDefault();
            link = $(this).attr('href');
            $('#audioSource').attr('src', link);
            audio.load();
            audio.play();
            findli();
        });
    }




});





