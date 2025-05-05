# Edge.stroke

## Availability

Flash CS4 Professional.

## Usage

Edge.stroke

## Description

Property; `Stroke`; a [Stroke object](../Stroke_object/Stroke_summary.md).

## Example

The following example displays the stroke color of the first edge of the selected object:

```javascript
var shape = fl.getDocumentDOM().selection[0];
fl.trace(shape.edges[0].stroke.color);
```
