function labels(rgbWidth,rgbHeight,imagePadding){

  var redStainingLabel = document.getElementById('redStainingLabel').value,
      greenStainingLabel = document.getElementById('greenStainingLabel').value,
      blueStainingLabel = document.getElementById('blueStainingLabel').value,
      grayStainingLabel = document.getElementById('grayStainingLabel').value
      treatmentLabel = document.getElementById('treatmentLabel').value

      ;


  var svg = d3.select("#svgDiv").select("svg"),
      x = 0 + 15,
      fontHeight = 25,
      fontWidth = 11;
  addLable(svg,treatmentLabel, x, fontHeight+imagePadding, "gray");

  addLable(svg,redStainingLabel, rgbWidth-imagePadding*2-redStainingLabel.length*fontWidth, rgbHeight-fontHeight*4, "red");
  addLable(svg,greenStainingLabel, rgbWidth-imagePadding*2-redStainingLabel.length*fontWidth, rgbHeight-fontHeight*3, "green");
  addLable(svg,blueStainingLabel, rgbWidth-imagePadding*2-redStainingLabel.length*fontWidth, rgbHeight-fontHeight*2, "blue");
  addLable(svg,grayStainingLabel, rgbWidth-imagePadding*2-redStainingLabel.length*fontWidth, rgbHeight-fontHeight*1, "lightgray");


  function addLable(svg,stainingLabel, x, y, color){
    svg.append("g").append("text")
                   .attr("x", x)
                   .attr("y", y)
                   .attr("font-family", "sans-serif")
                   .attr("font-size", 25)
                   .attr("fill", color)
                   .attr("fill-opacity", 0.9)
                   .text(stainingLabel);
  }
}
