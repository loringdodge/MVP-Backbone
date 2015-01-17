var ContentView = Backbone.View.extend({

	el : _.template('<div id="main"></div>'),

	initialize : function() {
		this.playlistView = new PlaylistView({collection : this.model.get('playlist')});
	},

	render : function() {
		return this.$el.html(this.el());
	}



});