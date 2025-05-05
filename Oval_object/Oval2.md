# Oval.innerRadius

## Availability

Flash CS3 Professional.

## Usage

Oval.innerRadius

## Description

Read-only property; a float value that specifies the inner radius of the Oval object as a percentage. Acceptable values are from 0 to 99.
To set this value, use [Document.setOvalObjectProperty()](../Document_object/Document590.md).

## Example

The following example sets the inner radius of selected Oval objects to 50 percent:

```javascript
fl.getDocumentDOM().setOvalObjectProperty("innerRadius", 50);
```

## See also

- [Document.setOvalObjectProperty()](../Document_object/Document590.md)
- [Shape.isOvalObject](../Shape_object/Shape9.md)
