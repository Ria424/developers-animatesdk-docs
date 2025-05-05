# OvalObject.startAngle

## Availability

Flash CS3 Professional.

## Usage

OvalObject.startAngle

## Description

Read-only property; a float value that specifies the start angle of the Oval object. Acceptable values are from 0 to 360. To set this value, use [Document.setOvalObjectProperty()](../Document_object/Document590.md).

## Example

The following example sets the start angle of selected Oval objects to 270:

```javascript
fl.getDocumentDOM().setOvalObjectProperty("startAngle", 270);
```

## See also

[Document.setOvalObjectProperty()](../Document_object/Document590.md), [OvalObject.endAngle](../OvalObject_object/OvalObject1.md), [Shape.isOvalObject](../Shape_object/Shape9.md)
