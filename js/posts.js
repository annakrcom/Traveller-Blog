

$(document).ready(function(){

		$('.all-posts').addClass('js-category-active').removeClass('js-category-hidden');    
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
			$('.saving-money').removeClass('js-category-active').addClass('js-category-hidden');   
		});



		$('.articles').click(function(){
            var $target = $(event.target);

	        if ($target.hasClass('submit-button-comments')) {                                    
				var $name = $($target).siblings('input[name="user-name"]');                           
				var $userName = $name.val();													   

				var $comment = $($target).siblings("textarea");									   
				var $commentText = $comment.val();

				var recepient = $($target).parent().siblings(".all-comments");				   	      
				var newComment = document.createElement('div');

				newComment.className = "comment";
				newComment.innerHTML = '<div class="comment-user">' 
				 + '<img src="../../assets/images/avatar.png"><button class="direct-message" value="direct message">' 
				 + 'direct message</button></div>' +
				 '<div class="comment-content"><h5><span class="user-name">' 
				 + $userName + '</span></h5>' +
				 '<p>' + $commentText + '</p>' +
				 '<button class="delete-button delete-button-comment">Delete comment</button></div>';
				  
			   recepient.append(newComment);
			};
		});




		$(".optional-item").hide();
		$(".add-new-post-item").click(function(event){
			var eventTarget = this;
			event.preventDefault();
			$(".optional-item").toggle();
		});


		$("#addPost").click(function(){ 
			event.preventDefault();                                    
                
			var $mainHeading = $('#heading-new-post').val();	
			var $subheading = $('#subheading-new-post').val();						   
			var $introParagraph = $("#new-post-paragraph-1").val();
			var $subheadingSecond = $("#subheading-2nd-level-new-post").val();
			var $secondPara = $("#new-post-paragraph-2").val();
			var $subheadingSecondTwo = $("#subheading-new-post-2").val();
			var $thirdPara = $("#new-post-paragraph-3").val();
			var recepient = $(".articles");			   	      
			var newPost = document.createElement('div');

			newPost.className = "article-holder";
			newPost.innerHTML = '<article class="all-posts">'+'<h3>'+ $mainHeading +'</h3>' +
				'<img class="blog-post-image" src="../../assets/images/posts/placeholder.jpg" alt="placeholder.jpg">'+
			    '<h4>' + $subheading +'</h4><p>' + $introParagraph + '</p><h5>' + $subheadingSecond + 
				'</h5><p>' + $secondPara + '</p><h5>' + $subheadingSecondTwo + '</h5><p>' + $thirdPara + '</p>' +
				'<div class="delete-button delete-button-post">DELETE POST</div>' + 
				'<div class="comments-container">' +
				'<h4>COMMENTS</h4><div class="all-comments"></div>' +
				'<div class="comment-field">' +
				"<label for='user-name'>What's your name?</label><br>" +
				'<input type="text" name="user-name" placeholder="your name"><br>' +
				'<textarea rows="4" placeholder="your comment..."></textarea>' +
				'<input class="submit-button-comments" type="submit" name="submit" value="share comment"></div></div>';

		    recepient.append(newPost); 
		}); 



        $('.articles').click(function(){         
            var $target = $(event.target);
            if ($target.hasClass('direct-message')){  
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
            }
      });


        $('.articles').click(function(){
          var $target = $(event.target);
          if ($target.hasClass('delete-button')){           
              var areYouSure = confirm('are you sure?');
              if (areYouSure == true) {
              	$($target).parent().parent().remove();
              }
          };
        });
		


});








 







