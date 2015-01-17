var SongView = Backbone.View.extend({

	model: SongModel,

	template : _.template(
		'	<div class="music-box small" style="<%= boxPosition %>">' +
		'		<img class="picture" src="<%= this.changeArtworkSize(artwork_url, "large.jpg", "t300x300.jpg") %>" />' +
		'		<div class="overlay" data-url="<%= permalink_url %>">' +
		'			<div class="player-status">' +
		'				<img src="img/play.png" />' +
		'			</div>' +
		'		</div>' +
		'		<div class="bottom">' +
		'			<div class="ranking"> <%= this.getIndexRanking() + 1 %>' + 
		'			</div>' +
		'			<div class="song"><%= user.username %>' + 
		'			</div>' +
		'			<div class="band"><%= title %>' + 
		'			</div>' +
		'			<div class="dropdown"></div>' +
		'		</div>' +
		'	</div>'),

	events : {
		'click' : 'playSong'
	},

	playSong : function() {
		var link = this.model.attributes.permalink_url;
	  $('.sc-player').scPlayer({
	      autoPlay  :   true,
	      links: [{url: link}],
	  });
	},

	render : function(){
		return this.$el.html(this.template(this.model.attributes));
	},

	getIndexRanking : function() {
    return this.model.collection.indexOf(this.model);
  },

  // **** IMAGE SIZES FOR artwork_url ***********

  // t500x500:     500px×500px
  // crop:         400px×400px
  // t300x300:     300px×300px
  // large:        100px×100px  (default)
  // t67x67:       67px×67px    (only on artworks)
  // badge:        47px×47px
  // small:        32px×32px
  // tiny:         20px×20px    (on artworks)
  // tiny:         18px×18px    (on avatars)
  // mini:         16px×16px
  // original:     originally uploaded image

	changeArtworkSize : function(url, image1, image2) {
    if(url) {  
      return url.replace(image1, image2);
    }
    return;
  }


});