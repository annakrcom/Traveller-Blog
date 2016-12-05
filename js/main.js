$(document).ready(function() {

      $('.dropdown-button').click(function(){
        $('#js-nav-dropdown').toggleClass('active');  // dropdown main menu
      });

     

      $('.direct-message').click(function(){           // direct message to user
            $('.pop-up-direct-message').slideDown('fast');
            $('.pop-up-direct-message').html('<textarea rows="10" placeholder="type your message"></textarea>' + 
                    '<button class="send-direct">Send direct message</button><button class="cancel">Cancel</button>');

            $('.cancel').click(function(){
                    $('.pop-up-direct-message').slideUp('fast');

            });

            $('.send-direct').click(function(){
                    $('.pop-up-direct-message').delay(700).slideUp('fast');
                    alert('Your message has been sent successfully!');  
                });
      });

       

        $('.delete-button').click(function(){           //delete post - reusable but have to modify classes and css at first
            var areYouSure = confirm('are you sure?');
            if (areYouSure == true) {
            $(this).parent().parent().remove();
         }

        });
 
        $('.delete-comment-button').click(function(){    //delete comment - reusable but have to modify classes and css at first
            var areYouSure = confirm('are you sure?');
            if (areYouSure == true) {
            $(this).parent().parent().remove();
          }

        });  


});

