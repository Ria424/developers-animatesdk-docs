# Shape.numCubicSegments

## Availability

Flash CS4 Professional.

## Description

Read-only property; the number of cubic segments in the shape.

## Example

Assuming a square or rectangle shape is selected, the following code displays "4" in the Output panel:

```javascript
var theShape = fl.getDocumentDOM().selection[0];
fl.trace(theShape.numCubicSegments);
```
