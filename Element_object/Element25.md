# Element.width

## Availability

Flash MX 2004.

## Description

Property; `float`; a float value that specifies the width of the element in pixels.
Do not use this property to resize a text field. Instead, select the text field and use [Document.setTextRectangle()](../Document_object/Document9846.md). Using this property with a text field scales the text.

## Example

The following example sets the width of the specified element to 100:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].width = 100;
```
