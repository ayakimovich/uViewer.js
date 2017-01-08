function labels(svgWidth,svgHeight,rgbWidth,rgbHeight,imagePadding){

  var redStainingLabel = document.getElementById('redStainingLabel').value,
      greenStainingLabel = document.getElementById('greenStainingLabel').value,
      blueStainingLabel = document.getElementById('blueStainingLabel').value,
      grayStainingLabel = document.getElementById('grayStainingLabel').value
      treatmentLabel = document.getElementById('treatmentLabel').value

      ;


  var group = d3.select("#svgDiv").select("svg").append("g"),
      x = 0 + 15,
      fontHeight = 25,
      fontWidth = 12;
  addLable(group,treatmentLabel, x, fontHeight+imagePadding, "white");

  addLable(group,redStainingLabel, imagePadding, rgbHeight-imagePadding-fontHeight*4, "red");
  realignRight("#redTextBox", rgbWidth, imagePadding);
  addLable(group,greenStainingLabel, imagePadding, rgbHeight-imagePadding-fontHeight*3, "green");
  realignRight("#greenTextBox", rgbWidth, imagePadding);
  addLable(group,blueStainingLabel, imagePadding, rgbHeight-imagePadding-fontHeight*2, "blue");
  realignRight("#blueTextBox", rgbWidth, imagePadding);
  addLable(group,grayStainingLabel, imagePadding, rgbHeight-imagePadding-fontHeight*1, "lightgray");
  realignRight("#lightgrayTextBox", rgbWidth, imagePadding);

  //add generated text
  group.append("text")
       .attr("id", "generatedText")
       .attr("x", Math.ceil(svgWidth/2-svgWidth*0.2))
       .attr("y", svgHeight-5)
       .attr("font-family", "sans-serif")
       .attr("font-size", 15)
       .attr("fill", "lightgray")
       .attr("fill-opacity", 0.9)
       .text("generated with uViewer.js on http://ayakimovich.github.io/uViewer.js");

  function addLable(group,stainingLabel, x, y, color){
    group.append("g").append("text")
                   .attr("id", color+"TextBox")
                   .attr("x", x)
                   .attr("y", y)
                   .attr("font-family", "sans-serif")
                   .attr("font-size", 25)
                   .attr("fill", color)
                   .attr("fill-opacity", 0.9)
                   .text(stainingLabel);
  }
  function realignRight(id, rgbWidth, imagePadding){
    console.log("realinging "+id);
    var bboxWidth = d3.select(id).node().getBBox().width;
    d3.select(id)
      .attr("x", rgbWidth - bboxWidth -imagePadding);
  }
}
