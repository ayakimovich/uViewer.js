function uViewer() {

  initialize();

        imageFolder = document.getElementById('imageFolderPath').value,
        rgbImageFileName = document.getElementById('rgbImageName').value,
        redImageFileName = document.getElementById('redImageName').value,
        greenImageFileName = document.getElementById('greenImageName').value,
        blueImageFileName = document.getElementById('blueImageName').value,
        grayImageFileName = document.getElementById('grayImageName').value;

    //update default values by changed values
    document.getElementById('imageFolderPath').value = imageFolder;
    document.getElementById('rgbImageName').value = rgbImageFileName;

  function imagePreload(src) {
      var img = new Image();
      img.src = src;
      return img
  }

  function mainSVG(rgbImage, redImage, greenImage, blueImage, grayImage){
          //main svg start
          console.log("uViewer start")
          var svgWidth = document.getElementById('canvasWidth').value,
              svgHeight = svgWidth/2 + 100,
              r = 0,
              imagePadding = 5,
              scaleBarSize = document.getElementById('scaleBarWidth').value,
              micronPixelRatio = 31.015,
              scaleBarHeight = 5,
              rgbWidth = svgWidth/2-imagePadding*4,
              rgbHeight = rgbWidth,
              rgbX = imagePadding,
              rgbY = imagePadding;

          var zoomPaneWidth = rgbWidth/2 - imagePadding,
              zoomPaneHeight = rgbHeight/2 - imagePadding,
              scaleBarX = imagePadding*2,
              scaleBarY = rgbHeight - imagePadding - scaleBarHeight,
              rgbZoomPaneWidth = Math.floor(0.27*rgbWidth),
              rgbZoomPaneHeight = rgbZoomPaneWidth,
              rgbZoomPaneX = rgbWidth - imagePadding - rgbZoomPaneWidth,
              rgbZoomPaneY = rgbY + imagePadding*2,
              redZoomPaneX = rgbWidth + imagePadding*2,
              redZoomPaneY = imagePadding + Math.floor(imagePadding/2),
              greenZoomPaneX = redZoomPaneX + imagePadding + zoomPaneWidth,
              greenZoomPaneY = imagePadding + Math.floor(imagePadding/2),
              blueZoomPaneX = redZoomPaneX,
              blueZoomPaneY = zoomPaneHeight + imagePadding*2 + Math.floor(imagePadding/2),
              grayZoomPaneX = redZoomPaneX + imagePadding + zoomPaneWidth,
              grayZoomPaneY = blueZoomPaneY;

          var svg = d3.select("body").select("svg")
                .attr("width", svgWidth)
                .attr("height", svgHeight);
          //update parameters
          d3.select("#bigRGBImage")
            .attr({
              "height": rgbHeight,
              "width": rgbWidth,
              "x" : rgbX,
              "y" : rgbY,
            })
            .attr("xlink:href", rgbImage.src);
      // rgb pane
          d3.select("#clipRGB")
            .attr({
            "height": rgbZoomPaneHeight,
            "width": rgbZoomPaneWidth,
            "x" : rgbZoomPaneX,
            "y" : rgbZoomPaneY
            });
          d3.select("#clipRGBFrame")
            .attr({
            "height": rgbZoomPaneHeight,
            "width": rgbZoomPaneWidth,
            "x" : rgbZoomPaneX,
            "y" : rgbZoomPaneY,
            "fill-opacity": 0,
            "fill": "lightgray",
            "stroke": "lightgray",
            "stroke-width": imagePadding,
            "stroke-opacity": 0.5
            });

          var clipRGBImage = d3.select("#clipRGBImage")
            .attr("xlink:href", rgbImage.src)
            .attr({
            "height": rgbImage.naturalHeight,
            "width": rgbImage.naturalWidth,
            "x" : 0,
            "y" : 0
            });

    // red pane
          d3.select("#clipRed")
            .attr({
            "height": zoomPaneHeight,
            "width": zoomPaneWidth,
            "x" : redZoomPaneX,
            "y" : redZoomPaneY
            });
          d3.select("#clipRedFrame")
            .attr({
            "height": zoomPaneHeight,
            "width": zoomPaneWidth,
            "x" : redZoomPaneX,
            "y" : redZoomPaneY,
            "fill-opacity": 0,
            "fill": "gray",
            "stroke": "red",
            "stroke-width": imagePadding,
            "stroke-opacity": 0.5
            });

          var redImage = d3.select("#redImage")
            .attr("xlink:href", redImage.src)
            .attr({
            "height": rgbImage.naturalHeight,
            "width": rgbImage.naturalWidth,
            "x" : 0,
            "y" : 0
            });
    //green pane
          d3.select("#clipGreen")
            .attr({
            "height": zoomPaneHeight,
            "width": zoomPaneWidth,
            "x" : greenZoomPaneX,
            "y" : greenZoomPaneY
            });
          d3.select("#clipGreenFrame")
            .attr({
            "height": zoomPaneHeight,
            "width": zoomPaneWidth,
            "x" : greenZoomPaneX,
            "y" : greenZoomPaneY,
            "fill-opacity": 0,
            "fill": "gray",
            "stroke": "green",
            "stroke-width": imagePadding,
            "stroke-opacity": 0.5
            });

          var greenImage = d3.select("#greenImage")
            .attr("xlink:href", greenImage.src)
            .attr({
            "height": rgbImage.naturalHeight,
            "width": rgbImage.naturalWidth,
            "x" : 0,
            "y" : 0
            });
    //blue pane
            d3.select("#clipBlue")
              .attr({
              "height": zoomPaneHeight,
              "width": zoomPaneWidth,
              "x" : blueZoomPaneX,
              "y" : blueZoomPaneY
              });
            d3.select("#clipBlueFrame")
              .attr({
              "height": zoomPaneHeight,
              "width": zoomPaneWidth,
              "x" : blueZoomPaneX,
              "y" : blueZoomPaneY,
              "fill-opacity": 0,
              "fill": "gray",
              "stroke": "blue",
              "stroke-width": imagePadding,
              "stroke-opacity": 0.5
              });

            var blueImage = d3.select("#blueImage")
              .attr("xlink:href", blueImage.src)
              .attr({
              "height": rgbImage.naturalHeight,
              "width": rgbImage.naturalWidth,
              "x" : 0,
              "y" : 0
              });

    //gray pane
          d3.select("#clipGray")
            .attr({
            "height": zoomPaneHeight,
            "width": zoomPaneWidth,
            "x" : grayZoomPaneX,
            "y" : grayZoomPaneY
            });
          d3.select("#clipGrayFrame")
            .attr({
            "height": zoomPaneHeight,
            "width": zoomPaneWidth,
            "x" : grayZoomPaneX,
            "y" : grayZoomPaneY,
            "fill-opacity": 0,
            "fill": "gray",
            "stroke": "gray",
            "stroke-width": imagePadding,
            "stroke-opacity": 0.5
            });

          var grayImage = d3.select("#grayImage")
            .attr("xlink:href", grayImage.src)
            .attr({
            "height": rgbImage.naturalHeight,
            "width": rgbImage.naturalWidth,
            "x" : 0,
            "y" : 0
            });

        var svg = d3.select("body").select("svg")
              .attr("width", svgWidth)
              .attr("height", svgHeight);

        //add scale bar
        var scaleBarWidth = Math.floor((scaleBarSize*micronPixelRatio)*(rgbWidth/rgbImage.naturalWidth));
        console.log("width to natural width: "+rgbWidth/rgbImage.naturalWidth);
        console.log("Natural width: "+rgbImage.naturalWidth);
        console.log("microns to pixels: "+scaleBarSize*micronPixelRatio);
        console.log("Scale bar width: "+scaleBarWidth);
        svg.append("rect")
            .attr("x", scaleBarX)
            .attr("y", scaleBarY)
            .attr("height", scaleBarHeight)
            .attr("width", scaleBarWidth)
            .attr("fill-opacity", 0.9)
            .attr("fill", "lightgray")
            .attr("stroke","lightgray")
            .attr("stroke-width",0)
            .attr("stroke-opacity",0.9);

        svg.append("text")
            .attr("x", scaleBarX+scaleBarWidth/2-25)
            .attr("y", scaleBarY-scaleBarHeight-imagePadding)
            .attr("font-family", "sans-serif")
            .attr("font-size", 20)
            .attr("fill", "lightgray")
            .attr("fill-opacity", 0.9)
            .text(scaleBarSize+" µm");

        //resizable zoom rectangle code begin

          var width = 100,
              height = 100,
              rectStrokeWidth = 3,
              dragBarWidth = 10;

          var drag = d3.behavior.drag()
              .origin(Object)
              .on("drag", zoomerMove);

          var dragright = d3.behavior.drag()
              .origin(Object)
              .on("drag", rightZoomerResize);

          var dragleft = d3.behavior.drag()
              .origin(Object)
              .on("drag", leftZoomerResize);

          var dragtop = d3.behavior.drag()
              .origin(Object)
              .on("drag", topZoomerResize);

          var dragbottom = d3.behavior.drag()
              .origin(Object)
              .on("drag", bottomZoomerResize);

          var bigRGBImageHandle = svg.select("#bigRGBImageGroup").append("g")
                .data([{x: width / 2, y: height / 2}]);

          var zoomerRect = bigRGBImageHandle.append("rect")
                .attr("id", "active")
                .attr("x", function(d) { return d.x; })
                .attr("y", function(d) { return d.y; })
                .attr("height", height)
                .attr("width", width)
                .attr("fill-opacity", 0)
                .attr("cursor", "move")
                .attr("fill", "lightgray")
                .attr("stroke","lightgray")
                .attr("stroke-width",rectStrokeWidth)
                .attr("stroke-opacity",0.7)
                .call(drag);

          var zoomerHandleLeft = bigRGBImageHandle.append("rect")
                .attr("x", function(d) { return d.x - (dragBarWidth/2); })
                .attr("y", function(d) { return d.y + (dragBarWidth/2); })
                .attr("height", height - dragBarWidth)
                .attr("id", "dragleft")
                .attr("width", dragBarWidth)
                .attr("fill", "gray")
                .attr("fill-opacity", 0)
                .attr("cursor", "ew-resize")
                .call(dragleft);

          var zoomerHandleRight = bigRGBImageHandle.append("rect")
                .attr("x", function(d) { return d.x + width - (dragBarWidth/2); })
                .attr("y", function(d) { return d.y + (dragBarWidth/2); })
                .attr("id", "dragright")
                .attr("height", height - dragBarWidth)
                .attr("width", dragBarWidth)
                .attr("fill", "gray")
                .attr("fill-opacity", 0)
                .attr("cursor", "ew-resize")
                .call(dragright);

          var zoomerHandleTop = bigRGBImageHandle.append("rect")
                .attr("x", function(d) { return d.x + (dragBarWidth/2); })
                .attr("y", function(d) { return d.y - (dragBarWidth/2); })
                .attr("height", dragBarWidth)
                .attr("id", "dragleft")
                .attr("width", width - dragBarWidth)
                .attr("fill", "gray")
                .attr("fill-opacity", 0)
                .attr("cursor", "ns-resize")
                .call(dragtop);

          var zoomerHandleBottom = bigRGBImageHandle.append("rect")
                .attr("x", function(d) { return d.x + (dragBarWidth/2); })
                .attr("y", function(d) { return d.y + height - (dragBarWidth/2); })
                .attr("id", "dragright")
                .attr("height", dragBarWidth)
                .attr("width", width - dragBarWidth)
                .attr("fill", "gray")
                .attr("fill-opacity", 0)
                .attr("cursor", "ns-resize")
                .call(dragbottom);

          //adding scale bar text

          function zoomToImageCoordinate(zoomX,naturalWidth,rgbWidth,paneX){
                var zoomImageZero = paneX - Math.ceil(zoomX*(naturalWidth/rgbWidth));
                return zoomImageZero;
          }
          function zoomScaleNaturalSize(naturalWidth, zoomWidth, rgbWidth, zoomPaneWidth){
                //return  Math.ceil(naturalWidth*((rgbWidth/zoomWidth)*(rgbWidth/naturalWidth)));
                //return  Math.ceil(naturalWidth*(rgbWidth/zoomWidth)*(rgbWidth/naturalWidth));
                //return  Math.ceil(naturalWidth*(rgbWidth/zoomWidth));
                return  Math.ceil(rgbWidth*(rgbWidth/zoomWidth)*(zoomPaneWidth/rgbWidth));
          }
          //var rgbPanel = d3.select

          function zoomerMove(d) {

                zoomerRect
                    .attr("x", d.x = Math.max(rgbX, Math.min(rgbWidth + rgbX - width, d3.event.x)))
                zoomerHandleLeft
                    .attr("x", function(d) { return d.x - (dragBarWidth/2); })
                zoomerHandleRight
                    .attr("x", function(d) { return d.x + width - (dragBarWidth/2); })
                zoomerHandleTop
                    .attr("x", function(d) { return d.x + (dragBarWidth/2); })
                zoomerHandleBottom
                    .attr("x", function(d) { return d.x + (dragBarWidth/2); })


                zoomerRect
                    .attr("y", d.y = Math.max(rgbY, Math.min(rgbHeight + rgbY - height, d3.event.y)));
                zoomerHandleLeft
                    .attr("y", function(d) { return d.y + (dragBarWidth/2); });
                zoomerHandleRight
                    .attr("y", function(d) { return d.y + (dragBarWidth/2); });
                zoomerHandleTop
                    .attr("y", function(d) { return d.y - (dragBarWidth/2); });
                zoomerHandleBottom
                    .attr("y", function(d) { return d.y + height - (dragBarWidth/2); });

                //change clipping mask
                clipRGBImage
                  .attr("width", zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, rgbZoomPaneWidth))
                  .attr("height", zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, rgbZoomPaneHeight))
                  .attr("x", zoomToImageCoordinate(d.x,zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, rgbZoomPaneWidth),rgbWidth,rgbZoomPaneX))
                  .attr("y", zoomToImageCoordinate(d.y,zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, rgbZoomPaneWidth),rgbHeight,rgbZoomPaneY));
                redImage
                  .attr("width", zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth))
                  .attr("height", zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneHeight))
                  .attr("x", zoomToImageCoordinate(d.x,zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth),rgbWidth,redZoomPaneX))
                  .attr("y", zoomToImageCoordinate(d.y,zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneWidth),rgbHeight,redZoomPaneY));
                greenImage
                  .attr("width", zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth))
                  .attr("height", zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneHeight))
                  .attr("x", zoomToImageCoordinate(d.x,zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth),rgbWidth,greenZoomPaneX))
                  .attr("y", zoomToImageCoordinate(d.y,zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneWidth),rgbHeight,greenZoomPaneY));
                blueImage
                  .attr("width", zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth))
                  .attr("height", zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneHeight))
                  .attr("x", zoomToImageCoordinate(d.x,zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth),rgbWidth,blueZoomPaneX))
                  .attr("y", zoomToImageCoordinate(d.y,zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneWidth),rgbHeight,blueZoomPaneY));
                grayImage
                  .attr("width", zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth))
                  .attr("height", zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneHeight))
                  .attr("x", zoomToImageCoordinate(d.x,zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth),rgbWidth,grayZoomPaneX))
                  .attr("y", zoomToImageCoordinate(d.y,zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneWidth),rgbHeight,grayZoomPaneY));

          }

          function leftZoomerResize(d) {

                var oldx = d.x;
               //Max x on the right is x + width - dragBarWidth
               //Max x on the left is 0 - (dragBarWidth/2)
                d.x = Math.max(0, Math.min(d.x + width - (dragBarWidth / 2), d3.event.x));
                width = width + (oldx - d.x);
                //adding this for symetrical resize
                height = width;

                zoomerHandleLeft
                  .attr("x", function(d) { return d.x - (dragBarWidth / 2); });

                zoomerRect
                  .attr("x", function(d) { return d.x; })
                  .attr("width", width)
                  .attr("height", height);

               zoomerHandleTop
                  .attr("x", function(d) { return d.x + (dragBarWidth/2); })
                  .attr("width", width - dragBarWidth)
                  .attr("height", height - dragBarWidth);
               zoomerHandleBottom
                  .attr("x", function(d) { return d.x + (dragBarWidth/2); })
                  .attr("width", width - dragBarWidth)
                  //added for symetrical resize
                  .attr("height", height - dragBarWidth)

          }

          function rightZoomerResize(d) {
               //Max x on the left is x - width
               //Max x on the right is width of screen + (dragBarWidth/2)
               var dragx = Math.max(d.x + (dragBarWidth/2), Math.min(rgbWidth, d.x + width + d3.event.dx));

               //recalculate width
               width = dragx - d.x;
               //adding this for symetrical resize
               height = width;
               //move the right drag handle
               zoomerHandleRight
                  .attr("x", function(d) { return dragx - (dragBarWidth/2) });

               //resize the drag rectangle
               //as we are only resizing from the right, the x coordinate does not need to change
               zoomerRect
                  .attr("width", width)
                  .attr("height", height);
               zoomerHandleTop
                  .attr("width", width - dragBarWidth)
                  .attr("height", height - dragBarWidth);
               zoomerHandleBottom
                  .attr("width", width - dragBarWidth)
                  .attr("height", height - dragBarWidth)
          }

          function topZoomerResize(d) {
                var oldy = d.y;
               //Max x on the right is x + width - dragBarWidth
               //Max x on the left is 0 - (dragBarWidth/2)
                d.y = Math.max(0, Math.min(d.y + height - (dragBarWidth / 2), d3.event.y));
                height = height + (oldy - d.y);
                //adding this for symetrical resize
                width = height;
                zoomerHandleTop
                  .attr("y", function(d) { return d.y - (dragBarWidth / 2); });

                zoomerRect
                  .attr("y", function(d) { return d.y; })
                  .attr("height", height)
                  .attr("width", width);

                zoomerHandleLeft
                  .attr("y", function(d) { return d.y + (dragBarWidth/2); })
                  .attr("height", height - dragBarWidth)
                  .attr("width", width - dragBarWidth);
                zoomerHandleRight
                  .attr("y", function(d) { return d.y + (dragBarWidth/2); })
                  .attr("height", height - dragBarWidth)
                  .attr("width", width - dragBarWidth);
          }

          function bottomZoomerResize(d) {
               //Max x on the left is x - width
               //Max x on the right is width of screen + (dragBarWidth/2)
               var dragy = Math.max(d.y + (dragBarWidth/2), Math.min(rgbHeight, d.y + height + d3.event.dy));

               //recalculate width
               height = dragy - d.y;
               //adding this for symetrical resize
               width = height;
               //move the right drag handle
               zoomerHandleBottom
                  .attr("y", function(d) { return dragy - (dragBarWidth/2) });

               //resize the drag rectangle
               //as we are only resizing from the right, the x coordinate does not need to change
               zoomerRect
                  .attr("height", height)
                  .attr("width", width);
               zoomerHandleLeft
                  .attr("height", height - dragBarWidth);
               zoomerHandleRight
                  .attr("height", height - dragBarWidth)
                  .attr("width", width - dragBarWidth);
      }
      labels(rgbWidth,rgbHeight,imagePadding);
  }
//resizable zoom rectangle code end

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
          mainSVG(rgbImage, redImage, greenImage, blueImage, grayImage);
        });
      });
    });
  });
});
return false;
}
