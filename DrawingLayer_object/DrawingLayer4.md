## DrawingLayer.drawPath()

#### Availability

Flash MX 2004.

#### Usage

DrawingLayer.drawPath(path)

#### Parameters

**path** `Path`; A [Path object](../Path_object/Path_summary.md) to draw.

#### Returns

Nothing.

#### Description

Method; Draws the path specified by the *path* parameter. You typically use this method only when creating extensible tools.

#### Example

The following example draws a path specified by the Path object named gamePath:

```javascript
fl.drawingLayer.drawPath(gamePath);
```
