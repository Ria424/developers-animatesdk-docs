# Element.locked

## Availability

Flash MX 2004.

## Usage

*element.locked*

## Description

Property; `boolean`; True if the element is locked; false otherwise. If the value of [Element.elementType](../Element_object/Element1.md) is
"shape", this property is ignored.

## Example

The following example locks the first element in the first frame, top layer:

```javascript
// Similar to Modify > Arrange > Lock: 
fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].locked = true;
```
