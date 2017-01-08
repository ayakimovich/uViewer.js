function initialize(){
  //clean up removing svg place holder or the old svg
  d3.select("#svgDiv").select("svg").remove();
  d3.select("#svgDiv").select("p").remove();
  d3.select("#generateSVGButtonDiv").select("a").remove();
  d3.select("#generatePNGButtonDiv").select("a").remove();
  //add new svg
  d3.select("#svgDiv").append("p")
                      .html("NB: Move the region of interest (ROI) rectangle to select the field of the zoomed view (hover over corners). Resize ROI to zoom in/out (hover over borders).")
  //create all the groups
  var svg = d3.select("#svgDiv").append("svg")
                                .attr("id","mainSvgElement")
                                .attr("background","white");
  svg.append("g")
     .attr("id", "bigRGBImageGroup");
  svg.append("g")
     .attr("id", "clipPathRGBGroup");
  svg.append("g")
     .attr("id", "clipRGBFrameGroup");

  svg.append("g")
     .attr("id", "clipPathRedGroup");
  svg.append("g")
     .attr("id", "clipRedFrameGroup");

  svg.append("g")
     .attr("id", "clipPathGreenGroup");
  svg.append("g")
     .attr("id", "clipGreenFrameGroup");

  svg.append("g")
     .attr("id", "clipPathBlueGroup");
  svg.append("g")
     .attr("id", "clipBlueFrameGroup");

  svg.append("g")
     .attr("id", "clipPathGrayGroup");
  svg.append("g")
     .attr("id", "clipGrayFrameGroup");


  //append groups content
  d3.select("#bigRGBImageGroup").append("image")
                                .attr("id", "bigRGBImage");
  //RGB
  d3.select("#clipPathRGBGroup").append("clipPath")
                                .attr("id", "clipPathRGB")
                                .append("rect")
                                        .attr("id", "clipRGB");
  d3.select("#clipPathRGBGroup").append("image")
                                .attr("id", "clipRGBImage")
                                .attr("clip-path", "url(#clipPathRGB)");
  d3.select("#clipRGBFrameGroup").append("rect")
                                 .attr("id", "clipRGBFrame");
  //Red
  d3.select("#clipRedFrameGroup").append("rect")
                                 .attr("id", "clipRedFrame");

                                 d3.select("#clipPathRedGroup").append("clipPath")
                                                               .attr("id", "clipPathRed")
                                                               .append("rect")
                                                                       .attr("id", "clipRed");
                                 d3.select("#clipPathRedGroup").append("image")
                                                               .attr("id", "redImage")
                                                               .attr("clip-path", "url(#clipPathRed)");
                                 d3.select("#clipRedFrameGroup").append("rect")
 //Green
 d3.select("#clipGreenFrameGroup").append("rect")
                                 .attr("id", "clipGreenFrame");

                                 d3.select("#clipPathGreenGroup").append("clipPath")
                                                               .attr("id", "clipPathGreen")
                                                               .append("rect")
                                                                        .attr("id", "clipGreen");
                                 d3.select("#clipPathGreenGroup").append("image")
                                                               .attr("id", "greenImage")
                                                               .attr("clip-path", "url(#clipPathGreen)");
                                 d3.select("#clipGreenFrameGroup").append("rect")
                                  .attr("id", "clipGreenFrame");
  //Blue
   d3.select("#clipBlueFrameGroup").append("rect")
                                  .attr("id", "clipBlueFrame");

                                  d3.select("#clipPathBlueGroup").append("clipPath")
                                                                .attr("id", "clipPathBlue")
                                                                .append("rect")
                                                                         .attr("id", "clipBlue");
                                  d3.select("#clipPathBlueGroup").append("image")
                                                                .attr("id", "blueImage")
                                                                .attr("clip-path", "url(#clipPathBlue)");
                                  d3.select("#clipBlueFrameGroup").append("rect")
                                   .attr("id", "clipBlueFrame");
   //Gray
   d3.select("#clipGrayFrameGroup").append("rect")
                                   .attr("id", "clipGrayFrame");

                                   d3.select("#clipPathGrayGroup").append("clipPath")
                                                                 .attr("id", "clipPathGray")
                                                                 .append("rect")
                                                                          .attr("id", "clipGray");
                                   d3.select("#clipPathGrayGroup").append("image")
                                                                 .attr("id", "grayImage")
                                                                 .attr("clip-path", "url(#clipPathGray)");
                                   d3.select("#clipGrayFrameGroup").append("rect")
                                    .attr("id", "clipGrayFrame");


  // initialize save buttons, so that they don't appear before the main svg
  d3.select("#generateSVGButtonDiv").append("a")
                                     .attr("class", "pure-button")
                                     .attr("onclick", "saveSVGImage()")
                                     .html("Generate SVG");
  //d3.select("#generatePNGButtonDiv").append("a")
  //                                   .attr("class", "pure-button")
  //                                   .attr("onclick", "savePNGImage()")
  //                                   .html("Generate PNG");


   console.log("svg initialized");
}
