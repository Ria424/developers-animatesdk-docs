# Element.top

## Availability

Flash MX 2004.

## Description

Read-only property; `number`; top side of the element. The value of element.top is relative to the upper left of the Stage for elements that are in a scene and is relative to the symbol’s registration point if the element is stored within a symbol. Use [Document.setSelectionBounds()](../Document_object/Document9658.md) or [Document.moveSelectionBy()](../Document_object/Document160.md) to set this property.

## Example

The following example shows how the value of this property changes when an element is moved:

```javascript
// Select an element on the Stage and then run this script. 
var sel = fl.getDocumentDOM().selection[0];
fl.trace("Top (before) = " + sel.top);
fl.getDocumentDOM().moveSelectionBy({x: 0, y: 100});
fl.trace("Top (after) = " + sel.top);
```

See the [Element.elementType](../Element_object/Element1.md) example.
