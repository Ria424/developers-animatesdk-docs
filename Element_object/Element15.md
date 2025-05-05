# Element.scaleY

## Availability

Flash CS3 Professional.

## Usage

*element.scaleY*

## Description

Property; `float`; a float value that specifies the *y* scale value of symbols, drawing objects, and primitive rectangles and ovals. A value of 1 indicates 100 percent scale.

## Example

The following example sets the y scale value of the current selection to 2 (doubles its value):

```javascript
var element = fl.getDocumentDOM().selection[0];
element.scaleY = 2;
```

## See also

[Element.scaleX](../Element_object/Element14.md)
