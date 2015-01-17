var FooterView = Backbone.View.extend({

	el : _.template(
		'<div id="footer">' +
      '<a href="" class="sc-player"></a>' + 
      '<img class="logo" src="img/logo.png" />' +
      '<div class="player"></div>' +
    '</div>'),

	render : function(){
		return this.$el.html(this.el())
	}

});