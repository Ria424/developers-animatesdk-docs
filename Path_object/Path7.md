# Path.nPts

## Availability

Flash MX 2004.

## Description

Read-only property; an integer representing the number of points in the path. A new path has 0 points.

## Example

The following example uses the Output panel to show the number of points in the path referenced by the myPath
variable:

```javascript
var myPath = fl.drawingLayer.newPath();
var numOfPoints = myPath.nPts;
fl.trace("Number of points in the path: " + numOfPoints);
// Displays: Number of points in the path: 0
```
