# Filter.brightness

## Availability

Flash 8.

## Description

Property; `float`; a float value that specifies the brightness of the filter. Acceptable values are between -100 and 100. This property is defined for Filter objects with a value of "adjustColorFilter" for the [Filter.name](../Filter_object/Filter13.md) property.

## Example

The following example sets the brightness to 30.5 for the Adjust Color filters on the selected object(s):

```javascript
var myFilters = fl.getDocumentDOM().getFilters();
for (var i = 0; i < myFilters.length; i++) {
    if (myFilters[i].name == "adjustColorFilter") {
        myFilters[i].brightness = 30.5;
    }
}
fl.getDocumentDOM().setFilters(myFilters);
```
