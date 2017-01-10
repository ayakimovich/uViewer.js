function uViewer() {
  var opts = {
      lines: 9 // The number of lines to draw
    , length: 56 // The length of each line
    , width: 20 // The line thickness
    , radius: 50 // The radius of the inner circle
    , scale: 2 // Scales overall size of the spinner
    , corners: 1 // Corner roundness (0..1)
    , color: '#c9c9c9' // #rgb or #rrggbb or array of colors
    , opacity: 0.9 // Opacity of the lines
    , rotate: 16 // The rotation offset
    , direction: 1 // 1: clockwise, -1: counterclockwise
    , speed: 1 // Rounds per second
    , trail: 80 // Afterglow percentage
    , fps: 24 // Frames per second when using setTimeout() as a fallback for CSS
    , zIndex: 2e9 // The z-index (defaults to 2000000000)
    , className: 'spinner' // The CSS class to assign to the spinner
    , top: '50%' // Top position relative to parent
    , left: '50%' // Left position relative to parent
    , shadow: false // Whether to render a shadow
    , hwaccel: false // Whether to use hardware acceleration
    , position: 'absolute' // Element positioning
    }



  initialize();
  var target = document.getElementById("svgDiv");
  var spinner = new Spinner(opts).spin();
  target.appendChild(spinner.el);

  console.log("uViewer initialized");
  var imageFolder = document.getElementById('imageFolderPath').value,
      rgbImageFileName = document.getElementById('rgbImageName').value,
      redImageFileName = document.getElementById('redImageName').value,
      greenImageFileName = document.getElementById('greenImageName').value,
      blueImageFileName = document.getElementById('blueImageName').value,
      grayImageFileName = document.getElementById('grayImageName').value;

  //update default values by changed values
  document.getElementById('imageFolderPath').value = imageFolder;
  document.getElementById('rgbImageName').value = rgbImageFileName;




//prealod all images before starting
var rgbImage = new Image();

rgbImage.src = imageFolder+rgbImageFileName;
rgbImage.addEventListener("load", function() {
  console.log("rgb image loaded "+rgbImage.src);
  var redImage = new Image();

  redImage.src = imageFolder+redImageFileName;
  redImage.addEventListener("load", function() {
    console.log("red image loaded "+redImage.src);
    var greenImage = new Image();

    greenImage.src = imageFolder+greenImageFileName;
    greenImage.addEventListener("load", function() {
      console.log("green image loaded "+greenImage.src);
      var blueImage = new Image();

      blueImage.src = imageFolder+blueImageFileName;
      blueImage.addEventListener("load", function() {
        console.log("blue image loaded "+blueImage.src);
        var grayImage = new Image();

        grayImage.src = imageFolder+grayImageFileName;
        grayImage.addEventListener("load", function() {
          console.log("gray image loaded "+grayImage.src);
          console.log("Initializing main svg");
          spinner.stop();
          mainSvg(rgbImage, redImage, greenImage, blueImage, grayImage);
        });
      });
    });
  });
});
//return false;
}
