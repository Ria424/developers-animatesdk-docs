## Element.depth

#### Availability

Flash MX 2004.

#### Usage

Element.depth

#### Description

Read-only property; `integer`; An integer that has a value greater than 0 for the depth of the object in the view. The drawing order of objects on the Stage specifies which one is on top of the others. Object order can also be managed with the `Modify > Arrange` menu item.

#### Example

The following example displays the depth of the specified element in the Output panel:

```javascript
// Select an object and run this script.
fl.trace("Depth of selected object: " + fl.getDocumentDOM().selection[0].depth);
```

See the example for [Element.elementType](../Element_object/Element1.md).
