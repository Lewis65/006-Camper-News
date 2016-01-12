

var timeout;
$(document).ready(function(){
	
	$.getJSON("http://www.freecodecamp.com/news/hot", function(json){
		console.log(json);
		for (var i = 0; i < json.length; i++){
			
			if(json[i].metaDescription.length > 100){
				var description = json[i].metaDescription.substr(0, 120).trim()+"..."
			} else {
				var description = json[i].metaDescription;
			}
			
			var image = json[i].image;
			if (json[i].image === ""){
				image = json[i].author.picture;
			}
			$(".main").append("<div class='newsitem'><div class='upvotes'><div class='score'>"+json[i].upVotes.length+"</div></div><div class='itemimg' style='background: url("+image+") no-repeat center; background-size:cover;'></div><div class='itemtext'><div class='itemtitle'><a href='"+json[i].link+"'>"+json[i].headline+"</a></div><div class='itemdesc'>"+description+"</div></div></div><!--/newsitem"+i+"-->")
		}
	});
	
	
	
	$('.header-wrapper').mouseenter(function(){
		timeout = window.clearTimeout(timeout);
		$('.header').stop().slideDown(250);
	});
	$('.header-wrapper').mouseleave(function(){
		timeout = window.setTimeout(
			function(){
				$('.header').slideUp(750)
			}, 750
		);
	});
});