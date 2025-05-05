# Edge.setControl()

## Availability

Flash MX 2004.

## Usage

Edge.setControl(index, x, y)

## Parameters

**index** `integer`; Specifies which control point to set. Use values 0, 1, or 2 to specify the beginning, middle, and end control points, respectively.

**x** `number`; A floating-point value that specifies the horizontal location of the control point. If the Stage is in edit or edit-in-place mode, the point coordinate is relative to the edited object. Otherwise, the point coordinate is relative to the Stage.

**y** `number`; A floating-point value that specifies the vertical location of the control point. If the Stage is in edit or edit-in-place mode, the point coordinate is relative to the edited object. Otherwise, the point coordinate is relative to the Stage.

## Returns

Nothing.

## Description

Method; Sets the position of the control point of the edge. You must call shape.beginEdit() before using this method. See [Shape.beginEdit()](../Shape_object/Shape.md).

## Example

The following example sets the beginning control point of the specified edge to the (0, 1) coordinates:

```javascript
var x = 0;
var y = 1;
var shape = fl.getDocumentDOM().selection[0];
shape.beginEdit();
shape.edges[0].setControl(0, x, y);
shape.endEdit();
```
