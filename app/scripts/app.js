	var tweets;

	tweets = new App.TweetsCollection;


	tweets.fetch().done(function(data) {
	  var tweetsView;
	  tweetsView = new App.TweetsView(data).render();
	  $('.right .carousel').append(tweetsView.el);
	  //TODO need to find better way to do this
	  setTimeout(function() {
        $('#tweetCarousel').jcarousel({
            vertical: true,
            scroll: 1,
          });
        $('#recCarousel').jcarousel({
        	easing: 'easeInBack',
        	wrap: 'circular',
            scroll: 1,
            random: true,
            auto: 20
            // easing: 'easeInQuart'
          });
        $("abbr.timeago").timeago();
	  }, 500);
	});


	App.Router = Backbone.Router.extend({
		routes: {
			'*other': 'default'
		},


		default: function(module) {
			if(module==='')module='home';
			$('div.main div').hide();
			$('div.main div#'+module).fadeIn();
		}
	});

	new App.Router;
	Backbone.history.start();