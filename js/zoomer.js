function zoomer(svgWidth,
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
				clipRGBImage) {


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

          function zoomToImageCoordinate(zoomX,naturalWidth,rgbWidth,paneX,imagePadding,zoomPaneWidth, zoomWidth){
                var zoomImageZero = Math.floor(paneX - zoomX*(naturalWidth/rgbWidth));
                // console.log("recomputed coordinate: "+zoomImageZero);
                return zoomImageZero;
          }
          function zoomScaleNaturalSize(naturalWidth, zoomWidth, rgbWidth, zoomPaneWidth){
                // return  Math.ceil(rgbWidth*(rgbWidth/zoomWidth)*(zoomPaneWidth/rgbWidth));
                return  Math.ceil(rgbWidth*(zoomPaneWidth/zoomWidth));
          }
          //var rgbPanel = d3.select

          function zoomerMove(d) {

                var zoomerRectX = Math.max(rgbX, Math.min(rgbWidth + rgbX - width, d3.event.x)),
                    zoomerRectY = Math.max(rgbY, Math.min(rgbHeight + rgbY - height, d3.event.y));

                zoomerRect
                    .attr("x", d.x = zoomerRectX);
                zoomerHandleLeft
                    .attr("x", function(d) { return d.x - (dragBarWidth/2); });
                zoomerHandleRight
                    .attr("x", function(d) { return d.x + width - (dragBarWidth/2); });
                zoomerHandleTop
                    .attr("x", function(d) { return d.x + (dragBarWidth/2); });
                zoomerHandleBottom
                    .attr("x", function(d) { return d.x + (dragBarWidth/2); });


                zoomerRect
                    .attr("y", d.y = zoomerRectY);
                zoomerHandleLeft
                    .attr("y", function(d) { return d.y + (dragBarWidth/2); });
                zoomerHandleRight
                    .attr("y", function(d) { return d.y + (dragBarWidth/2); });
                zoomerHandleTop
                    .attr("y", function(d) { return d.y - (dragBarWidth/2); });
                zoomerHandleBottom
                    .attr("y", function(d) { return d.y + height - (dragBarWidth/2); });

                //change clipping mask
                
                // console.log("recomputing: rgb...");
                clipRGBImage
                  .attr("width", zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, rgbZoomPaneWidth))
                  .attr("height", zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, rgbZoomPaneHeight))
                  .attr("x", zoomToImageCoordinate(d.x-imagePadding,zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, rgbZoomPaneWidth),rgbWidth,rgbZoomPaneX,imagePadding,zoomPaneWidth, width))
                  .attr("y", zoomToImageCoordinate(d.y-imagePadding,zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, rgbZoomPaneHeight),rgbHeight,rgbZoomPaneY,imagePadding,zoomPaneHeight, height));
                
                // console.log("recomputing: red...");
                redImage
                  .attr("width", zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth))
                  .attr("height", zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneHeight))
                  .attr("x", zoomToImageCoordinate(d.x-imagePadding,zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth),rgbWidth,redZoomPaneX,imagePadding,zoomPaneWidth, width))
                  .attr("y", zoomToImageCoordinate(d.y-imagePadding,zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneHeight),rgbHeight,redZoomPaneY,imagePadding,zoomPaneHeight, height));
                
                // console.log("recomputing: green...");                
                greenImage
                  .attr("width", zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth))
                  .attr("height", zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneHeight))
                  .attr("x", zoomToImageCoordinate(d.x-imagePadding,zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth),rgbWidth,greenZoomPaneX,imagePadding,zoomPaneWidth, width))
                  .attr("y", zoomToImageCoordinate(d.y-imagePadding,zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneHeight),rgbHeight,greenZoomPaneY,imagePadding,zoomPaneHeight, height));
                
                // console.log("recomputing: blue...");                
                blueImage
                  .attr("width", zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth))
                  .attr("height", zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneHeight))
                  .attr("x", zoomToImageCoordinate(d.x-imagePadding,zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth),rgbWidth,blueZoomPaneX,imagePadding,zoomPaneWidth, width))
                  .attr("y", zoomToImageCoordinate(d.y-imagePadding,zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneHeight),rgbHeight,blueZoomPaneY,imagePadding,zoomPaneHeight, height));
                // console.log("recomputing: gray...");
                grayImage
                  .attr("width", zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth))
                  .attr("height", zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneHeight))
                  .attr("x", zoomToImageCoordinate(d.x-imagePadding,zoomScaleNaturalSize(rgbImage.naturalWidth, width, rgbWidth, zoomPaneWidth),rgbWidth,grayZoomPaneX,imagePadding,zoomPaneWidth, width))
                  .attr("y", zoomToImageCoordinate(d.y-imagePadding,zoomScaleNaturalSize(rgbImage.naturalHeight, height, rgbHeight, zoomPaneHeight),rgbHeight,grayZoomPaneY,imagePadding,zoomPaneHeight, height));

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

}