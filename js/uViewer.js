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
          mainSvg(rgbImage, redImage, greenImage, blueImage, grayImage);
        });
      });
    });
  });
});
//return false;
}
