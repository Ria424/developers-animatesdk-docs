# Element.skewY

## Availability

Flash CS3 Professional.

## Usage

*element.skewY*

## Description

Property; `float`; a float value between -180 and 180 that specifies the *y* skew value of symbols, drawing objects, and primitive rectangles and ovals.

## Example

The following example sets the y skew value of the current selection to 10:

```javascript
var element = fl.getDocumentDOM().selection[0]; 
element.skewY = 10;
```

## See also

[Document.setTransformationPoint()](../Document_object/Document9939.md), [Element.skewX](../Element_object/Element20.md)
