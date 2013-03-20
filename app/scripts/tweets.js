// https://api.twitter.com/1/favorites.json?count=5&screen_name=timgiblin

var App;

App = App || {};

function replaceURLWithHTMLLinks(text) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(exp,"<a href='$1' target=\"_blank\">$1</a>"); 
}

App.TweetsCollection = (function() {

  function TweetsCollection(user, apiUrl, count) {
    if (user == null) {
      user = 'timgiblin';
    }
    if (count == null) {
      count = 10;
    }
    if (apiUrl == null) {
      apiUrl = 'https://api.twitter.com/1/favorites.json';

    }
    this.user = user;
    this.apiUrl = apiUrl;
    this.count = count;
  }

  TweetsCollection.prototype.fetch = function() {
    // console.log("" + this.apiUrl + "?screen_name=" + this.user + "&count=" + this.count + "&callback=?");
    return $.getJSON("" + this.apiUrl + "?screen_name=" + this.user + "&count=" + this.count + "&callback=?");
  };

  return TweetsCollection;

})();

App.TweetsView = (function() {

  TweetsView.prototype.el = $('<ul id="tweetCarousel" class="jcarousel jcarousel-skin">');

  function TweetsView(tweets) {
    this.tweets = tweets;
  }

  TweetsView.prototype.render = function() {
    var _this = this;
    $.each(this.tweets, function(index, tweet) {
      var timeago = "<p><abbr class=\"timeago\" title=\""+tweet.created_at+"\"></abbr></p>";
      return _this.el.append("<li><img src='" + tweet.user.profile_image_url + "' alt='" + tweet.screen_name 
        + "'><a class='tweeter' href='https:\/\/twitter.com\/"+tweet.user.screen_name+"' target=\"_blank\">"+tweet.user.name+"</a><div class='tweetTxt'>" + replaceURLWithHTMLLinks(tweet.text) +timeago+ "</div></li>");
      // return _this.el.append("<li>\n  <img src='" + tweet.user.profile_image_url + "' alt='" + tweet.screen_name + "'>\n  </li>");
    });

    return this;
  };

  return TweetsView;

})();
