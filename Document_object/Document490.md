# Document.setElementProperty()

## Availability

Flash MX 2004.

## Usage

Document.setElementProperty(property, value)

## Parameters

**property** `string`; The name of the Element property to set. For a complete list of properties and values, see the Property summary table for the [Element object](../Element_object/Element_summary.md).
You can’t use this method to set values for read-only properties, such as [Element.elementType](../Element_object/Element1.md), [Element.top](../Element_object/Element22.md), or
[Element.left](../Element_object/Element8.md).

**value** `integer`; The value to set in the specified Element property.

## Returns

Nothing.

## Description

Method; Sets the specified Element property on selected objects in the document. This method does nothing if there is no selection.

## Example

The following example sets the width of all selected objects to 100 and the height to 50:

```javascript
fl.getDocumentDOM().setElementProperty("width", 100);
fl.getDocumentDOM().setElementProperty("height", 50);
```
