# DrawingLayer.curveTo()

## Availability

Flash MX 2004.

## Usage

DrawingLayer.curveTo(xCtl, yCtl, xEnd, yEnd)

## Parameters

**xCtl** `number`; A floating-point value that is the *x* position of the control point.

**yCtl** `number`; A floating-point value that is the *y* position of the control point.

**xEnd** `number`; A floating-point value that is the *x* position of the end control point.

**yEnd** `number`; A floating-point value that is the *y* position of the end control point.

## Returns

Nothing.

## Description

Method; Draws a quadratic curve segment starting at the current drawing position and ending at a specified point. You typically use this method only when creating extensible tools.

## Example

The following example draws a quadratic curve using the specified control points:

```javascript
fl.drawingLayer.curveTo(0, 0, 2, 0);
```
