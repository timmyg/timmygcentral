	var tweets;

	tweets = new App.TweetsCollection;

	tweets.fetch().done(function(data) {
	  var tweetsView;
	  tweetsView = new App.TweetsView(data).render();
	  return $('div.left').html(tweetsView.el);
	});


	var vent = _.extend({},Backbone.Events);	

	App.Router = Backbone.Router.extend({
		routes: {
			'*other': 'default'
		},


		default: function(module) {
			if(module==='')module='home';
			$('div.main div').hide();
			$('div.main div#'+module).show();
		}
	});

	new App.Router;
	Backbone.history.start();