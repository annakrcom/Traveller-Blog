$(document).ready(function(){


		$('.all-posts').addClass('js-category-active').removeClass('js-category-hidden');    
		
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
		
		$('.btn-saving-money').click(function(){
			$('.saving-money').addClass('js-category-active').removeClass('js-category-hidden');
			$('.being-smart').removeClass('js-category-active').addClass('js-category-hidden');
		});

		$('.btn-being-smart').click(function(){
			$('.being-smart').addClass('js-category-active').removeClass('js-category-hidden');
			$('.saving-money').removeClass('js-category-active').addClass('js-category-hidden');   
		});


		function addNew(element){
		   		return document.createElement(element);
		   }

		$('.articles').click(function(){
            var $target = $(event.target);

	        if ($target.hasClass('submit-button-comments')) {                                    
				var $name = $($target).siblings('input[name="user-name"]'),                           
					$userName = $name.val(),													   
					$comment = $($target).siblings("textarea"),								   
					$commentText = $comment.val(),
				    recepient = $($target).parent().siblings(".all-comments");				   	      
				
				var newComment = addNew('div');
						$(newComment).attr("class", "comment");

				var	commentUser = addNew('div');
						$(commentUser).attr("class","comment-user");

						var userPhoto = addNew('img');
								$(userPhoto).attr({
									src:"../../assets/images/avatar.png",
									alt:"avatar.png"
								});
						var directMessageButton = addNew('button');
								$(directMessageButton).attr({
									class:"direct-message",
									value:"direct message"
								}).text('direct message');	

					commentUser.append(userPhoto, directMessageButton);

				var commentContent = addNew('div');
						$(commentContent).attr("class","comment-content");

						var nameUnderPhoto = addNew('h5');
						var nameValue = addNew('span');
								$(nameValue).attr('class','user-name').text($userName);
						nameUnderPhoto.append(nameValue);

						var commentText = addNew('p');
								$(commentText).text($commentText);

						var deleteButton = addNew('button');
								$(deleteButton).attr("class","delete-button delete-button-comment").text('Delete comment');	

				commentContent.append(nameUnderPhoto, commentText, deleteButton);		
				newComment.append(commentUser, commentContent);			
				if ($commentText && $userName){
					recepient.append(newComment);
				} else if (!$commentText && !$userName){
					alert("empty fields can not be submitted, please fill and try again!");
				} else if (!$userName){
					alert("please type your name!");
				} else if (!$commentText){
					alert("please type your comment first!");
				};
			};
		});


		$(".optional-item").hide(); // additional inputs 'new post' form
		$(".add-new-post-item").click(function(event){
			event.preventDefault(); //avoiding page reload on button click
			$(".optional-item").toggle();
		});


		$("#addPost").click(function(){ 
			event.preventDefault();                                    
                
			var $customMainHeading = $('#heading-new-post').val(),	
				$customSubheading = $('#subheading-new-post').val(),						   
				$customIntroParagraph = $("#new-post-paragraph-1").val(),
				$customSubheadingSecond = $("#subheading-2nd-level-new-post").val(),
				$customSecondPara = $("#new-post-paragraph-2").val(),
				$customSubheadingSecondTwo = $("#subheading-new-post-2").val(),
				$customThirdPara = $("#new-post-paragraph-3").val(),
				recepient = $(".articles");			   	      
	
		   var newPost = addNew('div');
		   		$(newPost).attr("cclass","article-holder");

		   var article = addNew('article');
		   		$(article).attr("class","all-posts");

		   var mainHeading = addNew('h3');
		   		$(mainHeading).text($customMainHeading);

		   var postImage = addNew('img');
		   		$(postImage).attr({
				   	class: "blog-post-image",
				   	src: "../../assets/images/posts/placeholder.jpg",
				   	alt: "placeholder.jpg"
		   });

		   var subheading = addNew('h4');
		   		$(subheading).text($customSubheading);

		   var introParagraph = addNew('p');
		   		$(introParagraph).text($customIntroParagraph);

		   var subheadingSecond = addNew('h5');
		   		$(subheadingSecond).text($customSubheadingSecond);

		   var secondPara = addNew('p');
		   		$(secondPara).text($customSecondPara);

		   var subheadingSecondTwo = addNew('h5');
		   		$(subheadingSecondTwo).text($customSubheadingSecondTwo);

		   var thirdPara = addNew('p');
		   		$(thirdPara).text($customThirdPara);

		   var deleteButton = addNew('div');
		   		$(deleteButton).attr("class", "delete-button delete-button-post").text("DELETE POST");

		   var comments = addNew('div');
		   		$(comments).attr("class","comments-container");

		   		var commentsHeading = addNew('h4');
		   				$(commentsHeading).text('COMMENTS');

		   		var allComments = addNew('div');
		   				$(allComments).attr("class", "all-comments");

		   		var commentField = addNew('div');
		   				$(commentField).attr("class","comment-field");

		   		var label = addNew('label');
		   				$(label).attr("for","user-name").text("What's your name?");

		   		var breakline = addNew('br');

		   		var nameField = addNew('input');
		   				$(nameField).attr({
			   			type:"text",
			   			name:"user-name", 
			   			placeholder:"your name"
		   		});

		   		var breakline2 = addNew('br');

		   		var commentTextArea = addNew('textarea');
		   				$(commentTextArea).attr({
		   				rows:"4",
		   				placeholder:"your comment..."
		   		});

		   		var sendComment = addNew('input');
		   				$(sendComment).attr({
		   				class:"submit-button-comments",
		   				type:"submit",
		   				name:"submit",
		   				value:"share comment"
		   		});


			comments.append(commentsHeading, allComments, commentField);
			commentField.append(label, breakline, nameField, breakline2,commentTextArea,sendComment);
			article.append(mainHeading, postImage, subheading, introParagraph, subheadingSecond, secondPara, subheadingSecondTwo, thirdPara, deleteButton, comments);
			newPost.append(article);
			if ($customMainHeading && $customIntroParagraph){
			recepient.append(newPost); 
			} else if (!$customMainHeading && !$customIntroParagraph) {
				alert("You can not submit a post without at least main heading and intro paragraph");
			} else if (!$customMainHeading){
				alert("You can not submit a post without main heading");
			} else if (!$customIntroParagraph){
				alert("You can not submit a post intro paragraph");
			}

		});		 // end of addpost function



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
              };
          };
        });
		


});








 







