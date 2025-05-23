# Filter.saturation

## Availability

Flash 8.

## Description

Property; `float`; a float value that specifies the saturation value of the filter. Acceptable values are from -100 to 100. This property is defined for Filter objects with a value of "adjustColorFilter" for the [Filter.name](../Filter_object/Filter13.md) property.

## Example

The following example sets the saturation value to -100 (grayscale) for the Adjust Color filters on the selected object(s):

```javascript
var myFilters = fl.getDocumentDOM().getFilters();
for (var i = 0; i < myFilters.length; i++) {
    if (myFilters[i].name == "adjustColorFilter") {
        myFilters[i].saturation = -100;
    }
}
fl.getDocumentDOM().setFilters(myFilters);
```

## See also

[Document.setFilterProperty()](../Document_object/Document520.md)
