# Oval.endAngle

## Availability

Flash CS3 Professional.

## Usage

Oval.endAngle

## Description

Read-only property; a float value that specifies the end angle of the Oval object. Acceptable values are from 0 to 360. To set this value, use [Document.setOvalObjectProperty()](../Document_object/Document590.md).

## Example

The following example sets the end angle of selected Oval objects to 270.

```javascript
fl.getDocumentDOM().setOvalObjectProperty("endAngle", 270);
```

## See also

- [Document.setOvalObjectProperty()](../Document_object/Document590.md)
- [Oval.startAngle](../Oval_object/Oval3.md)
- [Shape.isOvalObject](../Shape_object/Shape9.md)
