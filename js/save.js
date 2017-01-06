function saveSVGImage(){
console.log("Button Pressed");

var html = d3.select("body").select("svg")
    .attr("title", "uViewer.js_render.svg")
    .attr("version", 1.1)
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .node().parentNode.innerHTML;

d3.select("#svg_a").remove();

d3.select("#saveSVGButtonDiv")
    .append("a")
    .html("Download SVG")
    .attr("href", "data:image/svg+xml;base64,"+ btoa(html))
    .attr("download", "svg_figure")
    .attr("id", "svg_a")
    .attr("class", "pure-button button-svg");
}

function savePNGImage(){
console.log("Button Pressed");

var html = d3.select("body").select("svg")
    .attr("title", "uViewer.js_render.svg")
    .attr("version", 1.1)
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .node().parentNode.innerHTML;

d3.select("#png_a").remove();

var imgsrc = 'data:image/svg+xml;base64,' + btoa(html);
var canvas = document.querySelector("canvas"),
        context = canvas.getContext("2d");
//canvas.setAttribute('width', 526);
//canvas.setAttribute('height', 233);

var image = new Image;
image.src = imgsrc;
image.onload = function () {
    context.drawImage(image, 0, 0);
    var canvasdata = canvas.toDataURL("image/png");
    var a = document.createElement("a");
    a.textContent = "save";
    a.download = "export_" + Date.now() + ".png";
    a.href = canvasdata;
    document.body.appendChild(a);
    canvas.parentNode.removeChild(canvas);
};

d3.select("#savePNGButtonDiv")
    .append("a")
    .html("Download PNG")
    .attr("href", "data:image/png;base64,"+ btoa(html))
    .attr("download", +"png_figure")
    .attr("class", "png_a")
    .attr("id", "png_a")
    .attr("class", "pure-button button-png");
}
