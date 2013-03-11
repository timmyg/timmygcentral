	var tweets;

	tweets = new App.TweetsCollection;


	tweets.fetch().done(function(data) {
	  var tweetsView;
	  tweetsView = new App.TweetsView(data).render();
	  $('#tweetCarousel').replaceWith(tweetsView.el);
	  $('#tweetCarousel').css('opacity','0')
	  setTimeout(function(){
		  $('#tweetCarousel').jcarousel({
		      vertical: true,
		      scroll: 1
		  });
		  $('#tweetCarousel').animate({opacity: 1}, 1000);
	   },2000);

	});


	App.Router = Backbone.Router.extend({
		routes: {
			'*other': 'default'
		},

		default: function(module) {
			if(module==='')module='home';
			$('div.main > div').hide();
			$('div.main div#'+module).fadeIn();
			//hacky way to show thumbnails because they arent showing.
			if(module==='portfolio')$('#portfolioCarousel li').css('width','70px');
		}
	});

	new App.Router;
	Backbone.history.start();