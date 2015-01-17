var PlaylistCollection = Backbone.Collection.extend({

	model : SongModel,

	url : 'http://api.soundcloud.com/resolve.json?url=https://soundcloud.com/loringdodge/sets/wearehunted&client_id=htuiRd1JP11Ww0X72T1C3g',

	parse : function(response){
  	return response.tracks;
  },

});