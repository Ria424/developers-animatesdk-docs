# Document.viewMatrix

## Availability

Flash MX 2004.

## Description

Read-only property; `Matrix`; A Matrix object. The viewMatrix is used to transform from object space to document space when the document is in edit mode. The mouse location, as a tool receives it, is relative to the object that is currently being edited. See [Matrix object](../Matrix_object/Matrix_summary.md).
For example, if you create a symbol, double-click to edit it, and draw with the PolyStar tool, the point (0,0) will be at the registration point of the symbol. However, the drawingLayer object expects values in document space, so if you draw a line from (0,0) using the drawingLayer, it will start at the upper left corner of the Stage. The viewMatrix property provides a way to transform from the space of the object being edited to document space.

## Example

The following example gets the value of the viewMatrix property:

```javascript
var mat = fl.getDocumentDOM().viewMatrix;
```
