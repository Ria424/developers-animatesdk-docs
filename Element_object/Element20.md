## Element.skewX

#### Availability

Flash CS3 Professional.

#### Usage

*element.skewX*

#### Description

Property; a float value between -180 and 180 that specifies the *x* skew value of symbols, drawing objects, and primitive rectangles and ovals.

#### Example

The following example sets the *x* skew value of the current selection to 10:

```javascript
var element = fl.getDocumentDOM().selection[0];
element.skewX = 10;
```

#### See also

[Document.setTransformationPoint()](../Document_object/Document9939.md), [Element.skewY](../Element_object/Element21.md)
