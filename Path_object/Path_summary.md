# Path summary

## Availability

Flash MX 2004.

## Description

The Path object defines a sequence of line segments (straight, curved, or both), which you typically use when creating extensible tools. The following example shows an instance of a Path object being returned from the flash object:

path = fl.drawingLayer.newPath();

See also the [DrawingLayer object](../DrawingLayer_object/DrawingLayer_summary.md).

## Method summary

The following methods are available for the Path object:

| **Method** | **Description** |
| --- | --- |
| [Path.addCubicCurve()](../Path_object/Path.md) | Appends a cubic Bézier curve segment to the path. |
| [Path.addCurve()](../Path_object/Path1.md) | Appends a quadratic Bézier segment to the path. |
| [Path.addPoint()](../Path_object/Path2.md) | Adds a point to the path. |
| [Path.clear()](../Path_object/Path3.md) | Removes all points from the path. |
| [Path.close()](../Path_object/Path4.md) | Appends a point at the location of the first point of the path and extends the path to that point, which closes the path. |
| [Path.makeShape()](../Path_object/Path5.md) | Creates a shape on the Stage by using the current stroke and fill settings. |
| [Path.newContour()](../Path_object/Path6.md) | Starts a new contour in the path. |

## Property summary

The following properties are available for the Path object:

| **Property** | **Description** |
| --- | --- |
| [Path.nPts](../Path_object/Path7.md) | Read-only; an integer representing the number of points in the path. |
