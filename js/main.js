$(document).ready(function() {

// here is a code for dropdown main menu
 
  $('.dropdown-button').click(function(){
    $('#js-nav-dropdown').toggleClass('active');
  });
 



// this code is for PRESSED state of social buttons

    $('.twitter').on('click', function(){
        $(this).addClass('twitter-clicked');
    });

    $('.twitter').on('mouseleave', function(){
        $(this).removeClass('twitter-clicked')});
   

    $('.instagram').on('click', function(){
        $(this).addClass('instagram-clicked');
    });

    $('.instagram').on('mouseleave', function(){
        $(this).removeClass('instagram-clicked')})

    $('.facebook').on('click', function(){
        $(this).addClass('facebook-clicked');
    });

    $('.facebook').on('mouseleave', function(){
        $(this).removeClass('facebook-clicked')})



// code for direct message to user 

$('.direct-message').click(function(){
   
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

                    
// function for sharing comments




 








/*var $name = $(this).siblings('input:text');
var $userName = $name.val();

var $comment = $(this).siblings("textarea");
var $commentText = $comment.val();
var $div = document.createElement('div');

$div.className = "comment";
$div.innerHTML = '<div class="comment-user">' 
        + '<img src="../assets/images/avatar.png"><button class="direct-message" value="direct message">' + 'direct message</button></div>' +
        '<div class="comment-content"><h5><span class="user-name">' + $userName + '</span></h5>' +
        '<p>' + $commentText + '</p>' + '</div></div>';
alert($div);

$(this).parent().siblings('all-comments').appendChild($div);

});
*/


$('.delete-button').click(function(){
    alert('are you sure?');
    $(this).parent().parent().remove();
});

$('.delete-comment-button').click(function(){
    alert('are you sure?');
    $(this).parent().parent().remove();
});

// takes current date -- to use for posting date for blog
	
//alert($.datepicker.formatDate('dd.mm.yy', new Date()));

//   category buttons from the main page
    


});

