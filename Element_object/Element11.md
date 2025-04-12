## Element.name

#### Availability

Flash MX 2004.

#### Usage

*element.name*

#### Description

Property; a string that specifies the name of the element, normally referred to as the Instance name. If the value of
element.elementType is "shape", this property is ignored. See [Element.elementType](../Element_object/Element1.md).

#### Example

The following example sets the Instance name of the first element in Frame 1, top layer to "clip_mc":

```javascript
fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].name = "clip_mc"; 
```

See the [Element.elementType](../Element_object/Element1.md) example.
