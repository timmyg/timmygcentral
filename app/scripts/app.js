	var tweets;

	tweets = new App.TweetsCollection;

	tweets.fetch().done(function(data) {
	  var tweetsView;
	  tweetsView = new App.TweetsView(data).render();
	  
	 //  setTimeout(function() {
		//     $('.jcarousel').jcarousel({
  //       // Configuration goes here
  //   });
		// }, 5);
		// $('.jcarousel').jcarousel({
		// });
	  return $('.carousel').html(tweetsView.el);
	});


	var vent = _.extend({},Backbone.Events);	

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