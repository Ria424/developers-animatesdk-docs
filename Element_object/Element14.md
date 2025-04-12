## Element.scaleX

#### Availability

Flash CS3 Professional.

#### Usage

*element.scaleX*

#### Description

Property; a float value that specifies the *x* scale value of symbols, drawing objects, and primitive rectangles and ovals. A value of 1 indicates 100 percent scale.

#### Example

The following example sets the x scale value of the current selection to 2 (doubles its value):

```javascript
var element = fl.getDocumentDOM().selection[0]; 
element.scaleX = 2;
```

#### See also

[Element.scaleY](../Element_object/Element15.md)
