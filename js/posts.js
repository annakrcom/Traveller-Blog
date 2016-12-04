

$(document).ready(function(){

		$('.all-posts').addClass('js-category-active').removeClass('js-category-hidden');    // filters for blog topics start


	//top destinations & new destinations

		$('.btn-all-posts').click(function(){
			$('.all-posts').addClass('js-category-active').removeClass('js-category-hidden');


		});	
		
			$('.btn-summer').click(function(){
			$('.summer-dests').addClass('js-category-active').removeClass('js-category-hidden');
			$('.winter-dests').removeClass('js-category-active').addClass('js-category-hidden');
		});

			$('.btn-winter').click(function(){
			$('.winter-dests').addClass('js-category-active').removeClass('js-category-hidden');
			$('.summer-dests').removeClass('js-category-active').addClass('js-category-hidden');

		});

		// travellers lifehacks



			$('.btn-saving-money').click(function(){
			$('.saving-money').addClass('js-category-active').removeClass('js-category-hidden');
			$('.being-smart').removeClass('js-category-active').addClass('js-category-hidden');

		});
			$('.btn-being-smart').click(function(){
			$('.being-smart').addClass('js-category-active').removeClass('js-category-hidden');
			$('.saving-money').removeClass('js-category-active').addClass('js-category-hidden');   // filters for blog topics end 

		});



		$(".submit-button-comments").click(function(){                                           // add comment function

		var $name = $(this).siblings('input[name="user-name"]');                                 //looks for field where user typed his name
		var $userName = $name.val();															 //takes string with typed name

		var $comment = $(this).siblings("textarea");											 //looks for textarea with text of comment
		var $commentText = $comment.val();														 //takes string with typed comment text

		    $(this).parent().siblings(".all-comments").append('<div class="comment"><div class="comment-user">' 
		        + '<img src="../../assets/images/avatar.png"><button class="direct-message" value="direct message">' + 'direct message</button></div>' +
		        '<div class="comment-content"><h5><span class="user-name">' + $userName + '</span></h5>' +
		        '<p>' + $commentText + '</p>' + '<button class="delete-comment-button">Delete comment</button></div></div>' );
		}); 






});








 







