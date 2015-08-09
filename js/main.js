function generateMenu(obj) {

            var menu = "<ul>";
            for(var i = 0; i < obj.audio.length; i++){
                console.log(obj.audio[i].title);
                menu += "<li><a href='" + obj.audio[i].link + "' class='playme'>" + obj.audio[i].title + " </a></li>";
            }
            menu += "</ul>";

            $(".menu-container").html(menu);

            $(".menu-container ul li").css({
                color: obj.audio.title
            });

            /*

            $(".menu-container ul li").mouseover(function(){
                $(this).css("background-color", obj.audio[0].hover);
            });

            $(".menu-container ul li").mouseout(function(){
                $(this).css("background-color", "#fff");
            });

            */

            $( ".menu-container ul li a" ).click(function(event) {
                //
                event.preventDefault();
                var href = $(this).attr("href");

                $(".audio-player-container").html( "<audio controls><source src='" + href + "' type='audio/mpeg'> </audio>") ;
                $('.audio-player-container').toggle();


            });
        }



        $.get("audio.json", function(data){
            generateMenu(data);
        });



        jQuery(document).ready(function($) {

              $('#checkbox').change(function() {
                setInterval(function() {
                  moveRight();
                }, 3000);
              });

              var slideCount = $('#slider ul li').length;
              var slideWidth = $('#slider ul li').width();
              var slideHeight = $('#slider ul li').height();
              var sliderUlWidth = slideCount * slideWidth;

              $('#slider').css({
                width: slideWidth,
                height: slideHeight
              });

              $('#slider ul').css({
                width: sliderUlWidth,
                marginLeft: -slideWidth
              });

              $('#slider ul li:last-child').prependTo('#slider ul');

              function moveLeft() {
                $('#slider ul').animate({
                  left: +slideWidth
                }, 200, function() {

                  $('#slider ul li:last-child').prependTo('#slider ul');
                  $('#slider ul').css('left', '');
                });
              };

              function moveRight() {
                $('#slider ul').animate({
                  left: -slideWidth
                }, 200, function() {
                  $('#slider ul li:first-child').appendTo('#slider ul');
                  $('#slider ul').css('left', '');
                });
              };

              $('a.control_prev').click(function() {
                moveLeft();
                var href = $('#slider > ul > li:nth-child(1) > a').attr("href")

                $(".audio-player-container").html( "<audio controls><source src='" + href + "' type='audio/mpeg'> </audio>") ;
                $('.audio-player-container').addClass('hidden');
              });

              $('a.control_next').click(function() {
                moveRight();
                var href = $('#slider > ul > li:nth-child(1) > a').attr("href")

                $(".audio-player-container").html( "<audio controls><source src='" + href + "' type='audio/mpeg'> </audio>") ;
                $('.audio-player-container').addClass('hidden');
              });

            });




            /*
            $('.playme').click(function(){
                if ($('.audio-player-container').hasClass('hidden')) {
                    $('.audio-player-container').toggle();
                } else{
                    return;
                }

            });

               */
