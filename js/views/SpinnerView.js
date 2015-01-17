var SpinnerView = Backbone.View.extend({

		el : _.template( 
				'	<div id="spinner">' +
			 	'		<div></div>' +
				'	  <div></div>' +
				'	  <div></div>' +
				'	  <div></div>' +
				'	</div>'),

		render : function(){
			return this.$el.html(this.el());
		}


});