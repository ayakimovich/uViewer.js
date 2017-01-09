function uViewer() {

  initialize();
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

  
  var opts = {
    lines: 9, // The number of lines to draw
    length: 9, // The length of each line
    width: 5, // The line thickness
    radius: 14, // The radius of the inner circle
    color: '#EE3124', // #rgb or #rrggbb or array of colors
    speed: 1.9, // Rounds per second
    trail: 40, // Afterglow percentage
    className: 'spinner', // The CSS class to assign to the spinner
  };




//prealod all images before starting
var rgbImage = new Image();
var spinner = new Spinner(opts).spin(rgbImage);
rgbImage.src = imageFolder+rgbImageFileName;
rgbImage.addEventListener("load", function() {
  console.log("rgb image loaded "+rgbImage.src);
  var redImage = new Image();
  var spinner = new Spinner(opts).spin(redImage);
  redImage.src = imageFolder+redImageFileName;
  redImage.addEventListener("load", function() {
    console.log("red image loaded "+redImage.src);
    var greenImage = new Image();
    var spinner = new Spinner(opts).spin(greenImage);
    greenImage.src = imageFolder+greenImageFileName;
    greenImage.addEventListener("load", function() {
      console.log("green image loaded "+greenImage.src);
      var blueImage = new Image();
      var spinner = new Spinner(opts).spin(blueImage);
      blueImage.src = imageFolder+blueImageFileName;
      blueImage.addEventListener("load", function() {
        console.log("blue image loaded "+blueImage.src);
        var grayImage = new Image();
        var spinner = new Spinner(opts).spin(blueImage);
        grayImage.src = imageFolder+grayImageFileName;
        grayImage.addEventListener("load", function() {
          console.log("gray image loaded "+grayImage.src);
          console.log("Initializing main svg");
          mainSvg(rgbImage, redImage, greenImage, blueImage, grayImage);
        });
      });
    });
  });
});
//return false;
}
