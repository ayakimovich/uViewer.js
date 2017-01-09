function mainSvg(rgbImage, redImage, greenImage, blueImage, grayImage){
    //main svg start
  console.log("uViewer start")
  var svgWidth = document.getElementById('canvasWidth').value,
      svgHeight = svgWidth/2 + 10,
      r = 0,
      imagePadding = 5,
      scaleBarSize = document.getElementById('scaleBarWidth').value,
      micronPixelRatio = 31.015,
      scaleBarHeight = 5,
      rgbWidth = svgWidth/2-imagePadding*4,
      rgbHeight = rgbWidth,
      rgbX = imagePadding,
      rgbY = imagePadding;

  var zoomPaneWidth = Math.floor(rgbWidth/2 - imagePadding),
      zoomPaneHeight = Math.floor(rgbHeight/2 - imagePadding),
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
      "xlink:href" : rgbImage.src});
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

  zoomer(svgWidth,
    svgHeight,
    imagePadding,
    scaleBarSize,
    micronPixelRatio,
    scaleBarHeight,
    rgbWidth,
    rgbHeight,
    rgbX,
    rgbY,
    zoomPaneWidth,
    zoomPaneHeight,
    scaleBarX,
    scaleBarY,
    rgbZoomPaneWidth,
    rgbZoomPaneHeight,
    rgbZoomPaneX,
    rgbZoomPaneY,
    redZoomPaneX,
    redZoomPaneY,
    greenZoomPaneX,
    greenZoomPaneY,
    blueZoomPaneX,
    blueZoomPaneY,
    grayZoomPaneX,
    grayZoomPaneY,
    svg,
    rgbImage,
    redImage,
    greenImage,
    blueImage,
    grayImage,
    clipRGBImage);


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

  var scaleBarText = svg.append("text")
                        .attr("x", scaleBarX+Math.ceil(scaleBarWidth/2)-25)
                        .attr("y", scaleBarY-scaleBarHeight)
                        .attr("font-family", "sans-serif")
                        .attr("font-size", 20)
                        .attr("fill", "lightgray")
                        .attr("fill-opacity", 0.9)
                        .text(scaleBarSize+" ");
  var textBoxWidth = scaleBarText.node().getBBox().width,
      textBoxHeight = scaleBarText.node().getBBox().height;



  console.log("textBoxHeight: "+textBoxHeight);
  var umScale = 0.8,
      umPositionX = Math.ceil(scaleBarX+scaleBarWidth/2-25+textBoxWidth),
      umPositionY = Math.ceil((scaleBarY-scaleBarHeight-imagePadding/2)-textBoxHeight/2*umScale);
  console.log(umPositionX);
  svg.append("path")
    .attr("d", "M 18.716797 0 C 17.732097 0 16.882162 0.19889625 16.166016 0.59765625 C 15.449869 0.99642292 14.834966 1.6149117 14.322266 2.453125 L 14.322266 0.33007812 L 12.064453 0.33007812 L 12.064453 12.222656 C 11.898974 12.171829 11.755483 12.090779 11.658203 11.939453 C 11.519856 11.703446 11.451172 11.339842 11.451172 10.851562 L 11.451172 0.33007812 L 9.203125 0.33007812 L 9.203125 8.3007812 C 9.203125 9.6679679 8.8994158 10.69336 8.2890625 11.376953 C 7.6868492 12.060546 6.7825517 12.402344 5.578125 12.402344 C 4.4794917 12.402344 3.6494106 12.10026 3.0878906 11.498047 C 2.526364 10.895834 2.2460938 10.006185 2.2460938 8.8261719 L 2.2460938 0.33007812 L 0 0.33007812 L 0 19.201172 L 2.2460938 19.201172 L 2.2460938 12.451172 C 2.5878937 13.085939 3.0472 13.561526 3.625 13.878906 C 4.21094 14.196293 4.9199267 14.355469 5.75 14.355469 C 6.5475267 14.355469 7.2382788 14.196293 7.8242188 13.878906 C 8.4182921 13.553386 8.9192719 13.070634 9.3261719 12.427734 C 9.4482452 13.078774 9.6761056 13.561526 10.009766 13.878906 C 10.343419 14.196293 10.791989 14.355469 11.353516 14.355469 C 11.638349 14.355469 11.925783 14.310223 12.21875 14.220703 C 12.399414 14.166991 12.588867 14.09082 12.78125 14.001953 L 14.322266 14.001953 L 14.322266 6.2734375 C 14.322266 4.9469442 14.660477 3.8981133 15.335938 3.125 C 16.011391 2.3437533 16.922852 1.953125 18.070312 1.953125 C 19.038739 1.953125 19.754883 2.2695369 20.21875 2.9042969 C 20.682617 3.5309302 20.914062 4.5039123 20.914062 5.8222656 L 20.914062 14.001953 L 23.171875 14.001953 L 23.171875 6.2734375 C 23.171875 4.9388042 23.510087 3.8863946 24.185547 3.1132812 C 24.861 2.3401746 25.781579 1.953125 26.945312 1.953125 C 27.897466 1.953125 28.604493 2.2695369 29.068359 2.9042969 C 29.532226 3.5390635 29.765625 4.5120456 29.765625 5.8222656 L 29.765625 14.001953 L 32.023438 14.001953 L 32.023438 5.75 C 32.023437 3.9108067 31.636395 2.4947865 30.863281 1.5019531 C 30.090168 0.50097312 28.99056 0 27.566406 0 C 26.508466 0 25.589847 0.24055646 24.808594 0.72070312 C 24.027347 1.2008431 23.356449 1.9440117 22.794922 2.953125 C 22.461269 1.9928383 21.944014 1.2623658 21.244141 0.7578125 C 20.552407 0.2532525 19.70963 0 18.716797 0 z")
    .attr("id", "um")
    .attr("transform", "translate("+umPositionX+","+umPositionY+") scale("+umScale+")")
    .style("fill","lightgray")
    .style("fill-opacity",0.9);




  
  labels(svgWidth,svgHeight,rgbWidth,rgbHeight,imagePadding);
}