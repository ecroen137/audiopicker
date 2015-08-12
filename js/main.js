function generateMenu(obj) {
            
            var menu = "<ul>";
            for(var i = 0; i < obj.audio.length; i++){
                console.log(obj.audio[i].title);
                menu += "<li><a href='" + obj.audio[i].link + "' class='playme" + i + "'>" + obj.audio[i].title + " </a></li>";    
            }
            menu += "</ul>";
            
            $(".menu-container").html(menu);
            
           
             
           
            
                            
            $( ".menu-container ul li a" ).click(function(event) {
                //
                event.preventDefault();
                var href = $(this).attr("href");
                var numb = $(this).attr("class");
                
                $(".audio-player-container").html( "<audio controls class='hh" + numb + "'><source src='" + href +  "' type='audio/mpeg'> </audio>") ;
                $('.audio-player-container').removeClass('hidden');
                     
                
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
                $('.audio-player-container').addClass('hidden');
              });
            
              $('a.control_next').click(function() {
                moveRight();
                $('.audio-player-container').addClass('hidden');
              });
            
            });

           
           
         
            /*
            $('.playme').click(function(){
                if ($('.audio-player-container').hasClass('hidden')) {
                    $('.audio-player-container').removeClass('hidden');
                } else{
                    return;
                }    
                
            });

               */
              