var arrangeBoxes() = function() {
  // Pseudocode for getting we are hunted layout 

  var main = $('#main');
  var header = $('#header');
  var footer = $('#footer');

  // an array of song objects from soundcloud
  var songs = [{
    link : 'www.soundcloud.com',
    name : 'Firework',
    artist : 'Katy Perry'
  }];
    // contains
      // links
      // song name
      // artist

  var template = _.template('');
  // set up a template
    // small
    // big


  var smallBoxDimensions = {
    width : 205,
    height : 205
  }

  var bigBoxDimensions = {
    width : 615,
    height : 410
  }

  var topPosition = 0;
  var leftPosition = 0;

  var windowSize = getWindowSize();

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

  var isGoodOnTop = function(box) {
    return box.height + topPosition < windowSize.height;
  }

  var isGoodOnLeft = function(box) {
    return box.width + leftPosition < windowSize.width;
  }

  var setPosition = function(){

  }
  // get the size of the window screen
  // based on window screen - determine how many squares can fit w/ a minimum of 2 to fit big music box

  // set the size of the container according to how many boxes have to be laid out horizontally - adjust for margins
    // remember to take into account the footer

  // dynamically add the boxes from top-bottom and then left-right with position absolute (only way it will work)
    // keep track of where we are in terms of left and top position
      // when a box to be added exceeds the bottom threshold -> next column

}


var slideEffect = function() {

  var main = $('#main');

  var divPosition = main.offset();

  var $leftBar = $('<div>', {id: 'slide-leftbar', class: 'slide-bar'});
  var $rightBar = $('<div>', {id: 'slide-rightbar', class: 'slide-bar'});

  main.append($leftBar).append($rightBar);

  var isGoodOnLeft = function(){
    return divPosition.left < 0;
  }

  var isGoodOnRight = function(){
    return divPosition.right > $(window).width();
  }

  element.mouseOver(function(){
    var windowWidth = $(window).width();
    if(windowWith > leftPosition)
    main.stop().animate({ right: windowWidth }, 1000)
  });

}



// Slide Effect

// have two divs on each size of the window screen - position fixed
// if hovered over, the div is animated to a certain direction
  // if the left-side div is at 0, stop (do nothing)
  // if the right-side div is at max value, stop (do nothing)


// Some sort of resizing function here