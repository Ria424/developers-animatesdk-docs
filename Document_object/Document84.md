# Document.getSelectionRect()

## Availability

Flash MX 2004.

## Usage

Document.getSelectionRect()

## Parameters

None.

## Returns

`RectangleBounds`; The bounding rectangle of the current selection, or 0 if nothing is selected. For information on the format of the return value, see [Document.addNewRectangle()](../Document_object/Document10.md).

## Description

Method; Gets the bounding rectangle of the current selection. If a selection is non-rectangular, the smallest rectangle encompassing the entire selection is returned. The rectangle is based on the document space or, when in edit mode, the registration point (also *origin point* or *zero point*) of the symbol being edited.

## Example

The following example gets the bounding rectangle for the current selection and then displays its properties:

```javascript
var newRect = fl.getDocumentDOM().getSelectionRect();
var outputStr = "left: " + newRect.left + " top: " + newRect.top + " right: " + newRect.right + " bottom: " + newRect.bottom; 
alert(outputStr);
```

## See also

- [Document.selection](../Document_object/Document430.md)
- [Document.setSelectionRect()](../Document_object/Document9689.md)
