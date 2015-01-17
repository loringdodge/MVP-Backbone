var PlaylistView = Backbone.View.extend({

	initialize: function() {
		this.playlistCollection = new PlaylistCollection();
		this.playlistCollection.fetch({
			success: _.bind(function (collection, response) {
    		this.render();
    		this.setContainerDimensions();
    		this.slideEffect();
    	}, this)
    });
  },

	render : function(){
		var that = this;
    this.$el.children().detach();
    this.$el.attr('id', 'main');

    this.$el.append(
      this.playlistCollection.map(function(song){
        song.attributes.boxPosition = that.getBoxPosition();
        return new SongView({model : song}).render();
      })
    );

    return this;
	},

	setContainerDimensions : function() {
		var container = $('#main');

		var headerHeight = $("#header").height();
		var footerHeight = $("#footer").height();
		var containerHeight = $(window).height() - headerHeight - footerHeight;
    var windowWidth = $(window).width();
    var smallBoxDimensions = {
	    width : 205,
	    height : 205
	  };

    var numOfSongs = this.playlistCollection.length;
    var boxesPerColumn = Math.floor(containerHeight / smallBoxDimensions.height);
    var containerWidth = Math.ceil(numOfSongs / boxesPerColumn) * smallBoxDimensions.height;
    var minContainerWidth = (containerWidth > windowWidth) ? containerWidth : windowWidth;

    var defaultContainerCSS = {
      'width' : minContainerWidth,
      'height' : containerHeight
    }

    container.css(defaultContainerCSS);

	},

  isWithinConstraints : function(number, constraint) {
    return number < constraint;
  },

  smallBoxDimensions : {
    width : 205,
    height : 205
  },

  topPosition : 0,
  leftPosition : 0,

	getBoxPosition : function() {

		var headerHeight = $("#header").height();
		var footerHeight = $("#footer").height();
		var containerHeight = $(window).height() - headerHeight - footerHeight;

    if(!this.isWithinConstraints((this.topPosition + this.smallBoxDimensions.height), containerHeight)){
      this.topPosition = 0;
      this.leftPosition += this.smallBoxDimensions.width;
    }

    var tempTopPosition = this.topPosition;
    this.topPosition += this.smallBoxDimensions.height;

    var output = "position: absolute; top:" + tempTopPosition + "px ; left:" + this.leftPosition + 'px';

    return output;

  },

  slideEffect : function() {
  	var that = this;

  	var container = $('#main');

    var containerWidth = container.outerWidth();
    var containerHeight = container.height();

    var windowWidth = $(window).width();

    var leftPosition = container.offset().left;
    var rightPosition = leftPosition + containerWidth;

    var getSpeed = function(distance, speed){
      return distance / speed;
    }

    var $leftBar = $('<div>', {
      id: 'slide-leftbar', 
      class: 'slide-bar',
    }).css({
      left : 0
    });

    var $rightBar = $('<div>', {
      id: 'slide-rightbar', 
      class: 'slide-bar',
    }).css({
      left : windowWidth - 200
    });

    $leftBar.hover(function(){
      if(container.offset().left === 0) {
        $leftBar.css('visibility', 'hidden');
      }
      if(that.isWithinConstraints(container.offset().left, 0)) {
        container.stop().animate({ left: 0 }, getSpeed(Math.abs(container.offset().left - 0) , 0.5), "linear");
      }
    }, function(){
      container.stop();
    });

    $rightBar.hover(function(){
      if(container.offset().left < 0) {
        $leftBar.css('visibility', 'visible');
      }
      if(that.isWithinConstraints(windowWidth, rightPosition)) {
        container.stop().animate({ left: (windowWidth - containerWidth) }, getSpeed(Math.abs(windowWidth - rightPosition) , 0.5), "linear")
      }
    }, function(){
      container.stop();
    });

    container.append($leftBar).append($rightBar);

  }

});