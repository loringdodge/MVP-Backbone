  
  var container = $('#main');
  var header = $('#header');
  var footer = $('#footer');

  var getWindowSize = function() {
    var width = $(window).width();
    var height = $(window).height();
    var headerHeight = header.height();
    var footerHeight = footer.height();
    return {
      width : width,
      height : height - (headerHeight + footerHeight)
    }
  }

  var smallBoxDimensions = {
    width : 205,
    height : 205
  }

  var bigBoxDimensions = {
    width : 615,
    height : 410
  }

  var smallBoxTemplate = function(song, style) {
    return '<div class="music-box small" style="position: absolute; top:' + style.top + 'px; left:' + style.left + 'px"><div class="overlay"><div class="player-status"><img src="img/play.png" /></div></div><div class="bottom"><div class="ranking">' + song.ranking + '</div><div class="song">' + song.artist + '</div><div class="band">' + song.title + '</div><div class="dropdown"></div></div></div>';
  };

  var bigBoxTemplate = function(song, style) {
    return '<div class="music-box big" style="position: absolute; top:' + style.top + 'px; left:' + style.left + 'px"><div class="overlay"><div class="player-status"><img src="img/play.png" /></div></div><div class="bottom"><div class="ranking">' + song.ranking + '</div><div class="song">' + song.artist + '</div><div class="band">' + song.title + '</div><div class="dropdown"></div></div><div class="banner"><div class="text">Free <span>Download</span></div></div></div>';
  };

  var isWithinConstraints = function(number, constraint) {
    return number < constraint;
  }

  var getSongs = function() {
    $.ajax({
      type: "POST",
      url: "some.php",
      data: { name: "John", location: "Boston" }
    })
      .done(function( msg ) {
        alert( "Data Saved: " + msg );
      });
  }




  var arrangeBoxes = function() {

    var songs = [];

    for(var i = 0; i < 100; i++){
      songs.push({
        link : 'www.soundcloud.com',
        title : 'Firework',
        artist : 'Katy Perry',
        ranking : (i + 1)
      });
    }

    var containerHeight = container.height();
    var windowWidth = $(window).width();

    // ********** Sets the main container to be proper size for No. of songs **************
    var numOfSongs = songs.length;
    var boxesPerColumn = Math.floor(containerHeight / smallBoxDimensions.height);
    var containerWidth = Math.ceil(numOfSongs / boxesPerColumn) * smallBoxDimensions.height;
    var minContainerWidth = (containerWidth > windowWidth) ? containerWidth : windowWidth;

    var defaultContainerCSS = {
      'width' : minContainerWidth
    }

    container.css(defaultContainerCSS);

    // ********** Sets the main container to be proper size for No. of songs **************
    var topPosition = 0;
    var leftPosition = 0;

    // var isGoodOnTop = function(leftPosition, windowHeight) {
    //   return box.height + topPosition < windowSize.height;
    // }

    var html = '';
    var indexSkip = [3, 4, 5];

    $.each(songs, function(index, song){

      if(!isWithinConstraints((topPosition + smallBoxDimensions.height), containerHeight)){
        topPosition = 0;
        leftPosition += smallBoxDimensions.width;
      }

      var boxPositionCSS = {
        'top' : topPosition,
        'left' : leftPosition
      }

      var template = smallBoxTemplate(song, boxPositionCSS);
      topPosition += smallBoxDimensions.height;

      html += template;

    });

    container.html(html);

  }

    // var isGoodOnTop = function(box) {
    //   return box.height + topPosition < windowSize.height;
    // }

    // var isGoodOnLeft = function(box) {
    //   return box.width + leftPosition < windowSize.width;
    // }

  //   var setPosition = function(){

  //   }
  //   // get the size of the window screen
  //   // based on window screen - determine how many squares can fit w/ a minimum of 2 to fit big music box

  //   // set the size of the container according to how many boxes have to be laid out horizontally - adjust for margins
  //     // remember to take into account the footer

  //   // dynamically add the boxes from top-bottom and then left-right with position absolute (only way it will work)
  //     // keep track of where we are in terms of left and top position
  //       // when a box to be added exceeds the bottom threshold -> next column

  // }


  var slideEffect = function() {

    arrangeBoxes();

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
      if(isWithinConstraints(container.offset().left, 0)) {
        container.stop().animate({ left: 0 }, getSpeed(Math.abs(container.offset().left - 0) , 0.5), "linear");
      }
    }, function(){
      container.stop();
    });

    $rightBar.hover(function(){
        if(container.offset().left < 0) {
          $leftBar.css('visibility', 'visible');
        }
      if(isWithinConstraints(windowWidth, rightPosition)) {
        container.stop().animate({ left: (windowWidth - containerWidth) }, getSpeed(Math.abs(windowWidth - rightPosition) , 0.5), "linear")
      }
    }, function(){
      container.stop();
    });

    // set default css

    container.append($leftBar).append($rightBar);

    // var isGoodOnLeft = function(){
    //   return divPosition.left < 0;
    // }

    // var isGoodOnRight = function(){
    //   return divPosition.right > $(window).width();
    // }

  }

slideEffect();

  // // Slide Effect

  // // have two divs on each size of the window screen - position fixed
  // // if hovered over, the div is animated to a certain direction
  //   // if the left-side div is at 0, stop (do nothing)
  //   // if the right-side div is at max value, stop (do nothing)


  // // Some sort of resizing function here


