# Filter.highlightColor

## Availability

Flash 8.

## Description

Property; `integer | string`; the color of the highlight, in one of the following formats:

- A string in the format "#RRGGBB" or "#RRGGBBAA"

- A hexadecimal number in the format 0xRRGGBB

- An integer that represents the decimal equivalent of a hexadecimal number

This property is defined for Filter objects with a value of "bevelFilter" for the [Filter.name](../Filter_object/Filter13.md) property.

## Example

The following example sets the highlight color to "#ff00003e" for the Bevel filters on the selected object(s):

```javascript
var myFilters = fl.getDocumentDOM().getFilters();
for (var i = 0; i < myFilters.length; i++) {
    if (myFilters[i].name == "bevelFilter") {
        myFilters[i].highlightColor = "#ff00003e";
    }
}
fl.getDocumentDOM().setFilters(myFilters);
```
