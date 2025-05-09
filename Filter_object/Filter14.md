# Filter.quality

## Availability

Flash 8.

## Description

Property; `string`; A string that specifies the blur quality. Acceptable values are "low", "medium", and "high" ("high" is similar to a Gaussian blur). This property is defined for Filter objects with a value of "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientGlowFilter", or "gradientBevelFilter" for the [Filter.name](../Filter_object/Filter13.md) property.

## Example

The following example sets the blur quality to "medium" for the Glow filters on the selected object(s):

```javascript
var myFilters = fl.getDocumentDOM().getFilters();
for (var i = 0; i < myFilters.length; i++) {
    if (myFilters[i].name == "glowFilter") {
        myFilters[i].quality = "medium";
    }
}
fl.getDocumentDOM().setFilters(myFilters);

```

## See also

[Document.setFilterProperty()](../Document_object/Document520.md)
