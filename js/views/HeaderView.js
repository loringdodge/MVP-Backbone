var HeaderView = Backbone.View.extend({

	el : _.template(
			' <div id="header">' +
		  '		<a class="soundcloud" href="http://www.soundcloud.com"><img src="img/soundcloud-logo.png" /></a>' +
		  '		<div class="left-nav">' +
		  '			<a href="#">Charts  <img class="icon" src="img/play.png" /></a>' +
		  '			<a href="#">Playlists <img class="icon" src="img/play.png" /></a>' +
		  '			<a href="#">Discovery</a>' +
		  '			<a href="#">Apps</a>' +
		  '			<a href="#">Search</a>' +
		  '		</div>' +
		  '		<div class="right-nav">' +
		  '			<a href="#">Create a playlist</a>' +
		  '			<a href="#">Sign in</a>' +
		  '			<a href="#">Feedback</a>' +
		  '			<a href="#">About <img class="icon" src="img/play.png" /></a>' +
		  '		</div>' +
		  '	</div>'),

	render : function() {
		return this.$el.html(this.el());
	}



});