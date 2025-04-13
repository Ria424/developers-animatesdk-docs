## DrawingLayer summary

#### Availability

Flash MX 2004.

#### Description

The DrawingLayer object is accessible from JavaScript as a child of the flash object. The drawingLayer object is used for extensible tools when the user wants to temporarily draw while dragging—for example, when creating a selection marquee. You should call [DrawingLayer.beginFrame()](../DrawingLayer_object/DrawingLayer1.md) before you call any other drawingLayer methods.

#### Method summary

The following methods are available for the drawingLayer object:

| **Method** | **Description** |
| --- | --- |
| [DrawingLayer.beginDraw()](../DrawingLayer_object/DrawingLayer.md) | Puts Flash in drawing mode. |
| [DrawingLayer.beginFrame()](../DrawingLayer_object/DrawingLayer1.md) | Erases what was previously drawn using the drawingLayer and prepares for more drawing commands. |
| [DrawingLayer.cubicCurveTo()](../DrawingLayer_object/DrawingLayer2.md) | Draws a cubic curve from the current pen location using the parameters as the coordinates of the cubic segment. |
| [DrawingLayer.curveTo()](../DrawingLayer_object/DrawingLayer3.md) | Draws a quadratic curve segment starting at the current drawing position and ending at a specified point. |
| [DrawingLayer.drawPath()](../DrawingLayer_object/DrawingLayer4.md) | Draws the specified path. |
| [DrawingLayer.endDraw()](../DrawingLayer_object/DrawingLayer5.md) | Exits drawing mode. |
| [DrawingLayer.endFrame()](../DrawingLayer_object/DrawingLayer6.md) | Signals the end of a group of drawing commands. |
| [DrawingLayer.lineTo()](../DrawingLayer_object/DrawingLayer7.md) | Draws a line from the current drawing position to the point (*x,y*). |
| [DrawingLayer.moveTo()](../DrawingLayer_object/DrawingLayer8.md) | Sets the current drawing position. |
| [DrawingLayer.newPath()](../DrawingLayer_object/DrawingLayer9.md) | Returns a new [Path object](../Path_object/Path_summary.md). |
| [DrawingLayer.setColor()](../DrawingLayer_object/DrawingLayer10.md) | Sets the color of subsequently drawn data. |
| [DrawingLayer.setFill()](../DrawingLayer_object/DrawingLayer11.md) | This method is not available. |
| [DrawingLayer.setStroke()](../DrawingLayer_object/DrawingLayer12.md) | This method is not available. |
