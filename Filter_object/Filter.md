# Filter.angle

## Availability

Flash 8.

## Description

Property; `float`; a float value that specifies the angle of the shadow or highlight color, in degrees. Acceptable values are between 0 and 360. This property is defined for Filter objects with a value of "bevelFilter", "dropShadowFilter", "gradientBevelFilter", or "gradientGlowFilter" for the [Filter.name](../Filter_object/Filter13.md) property.

## Example

The following example sets the angle to 120 for the Bevel filters on the selected object(s):

```javascript
var myFilters = fl.getDocumentDOM().getFilters();
for (var i = 0; i < myFilters.length; i++) {
    if (myFilters[i].name == "bevelFilter") {
        myFilters[i].angle = 120;
    }
}
fl.getDocumentDOM().setFilters(myFilters);
```

## See also

[Document.setFilterProperty()](../Document_object/Document520.md)
