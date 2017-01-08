function saveSVGImage(){
console.log("Button Pressed");

var html = d3.select("#svgDiv").select("svg")
    .attr("title", "uViewer.js_render.svg")
    .attr("version", 1.1)
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .node().parentNode.innerHTML;
html = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>"+html;
html = html.replace(/<p>(.*?)<\/p>/, "" );
d3.select("#svg_a").remove();

d3.select("#saveSVGButtonDiv")
    .append("a")
    .html("Download SVG")
    .attr("href", "data:image/svg+xml;base64,"+ btoa(html))
    .attr("download", "svg_figure")
    .attr("id", "svg_a")
    .attr("class", "pure-button button-svg");
}
// png currently doesn't work beacuse of the lack of server side or CORS alternative
//function savePNGImage(){
//console.log("Button Pressed");
//
//var svg = d3.select("#svgDiv").select("svg")
//    .attr("title", "uViewer.js_render.svg")
//    .attr("version", 1.1)
//    .attr("xmlns", "http://www.w3.org/2000/svg")
//    .node().parentNode.innerHTML;
//    //svg = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>"+svg;
//    svg = svg.replace(/<p>(.*?)<\/p>/, "" );
//    
//d3.select("#png_a").remove();

//saveSvgAsPng(svg, "diagram.png");
//saveSvgAsPng(document.getElementById("mainSvgElement"), "diagram.png");

//var canvas = document.createElement('canvas');
//canvas.height = svg.getAttribute('height');
//canvas.width = svg.getAttribute('width');
//canvg(canvas, svg.parentNode.innerHTML.trim());
//canvg(canvas, svg);
//var dataURL = canvas.toDataURL('image/png');


//d3.select("#savePNGButtonDiv")
//    .append("a")
//    .html("Download PNG")
//    .attr("href", dataURL)
//    .attr("download", Date.now()+"png_figure")
//    .attr("id", "png_a")
//    .attr("class", "pure-button button-png");
//}
