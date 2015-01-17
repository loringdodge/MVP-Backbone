var AppView = Backbone.View.extend({

	initialize : function(params){
		this.spinnerView = new SpinnerView();
		this.headerView = new HeaderView();
		this.playlistView = new PlaylistView();
		this.footerView = new FooterView();
	},

	render : function(){
		return this.$el.html([
			this.spinnerView.$el,
			this.headerView.$el,
			this.playlistView.$el,
			this.footerView.$el
		])
	},

});