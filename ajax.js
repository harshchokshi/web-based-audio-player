
    $(document).ready(function() {
        $(".add").click(function () {
               $('form').toggleClass("ajax");
        });
  
        $(".submit_button").click(function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            checkIsEmpty();
        });

        function checkIsEmpty () {
         
            var values = [ ];
            $("input[type='text']").each(function () {
            if ($(this).val()) {
                values.push($(this).val());
            }
            else {
                values.push("null");
                event.preventDefault();
            }
        })

     
        if (values.includes("null") ) {
            alert("Input is required!");
        }
        else {
               ajaxProcess();
        }
        }

        function ajaxProcess() {
            
           
            var title = $("#title").val();
            var artist= $("#artist").val();
            var link = $("#link").val();
    
            $.ajax({
                method: "POST",
                url:"addSong.php",
                data: {title:title, 
                       artist:artist, 
                       link:link
                       }, 
                cache: true,
               success: function (html) {
                     
                        $("#show").after(html);
                        $('form')[0].reset();
                        $('#tracklist').load("playlist.php");  
               }
            });
        }


    });
    



