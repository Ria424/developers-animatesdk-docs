# Filter.blurX

## Availability

Flash 8.

## Usage

filter.blurX

## Description

Property; `float`; a float value that specifies the amount to blur in the *x* direction, in pixels. Acceptable values are between 0 and 255. This property is defined for Filter objects with a value of "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", or "gradientGlowFilter" for the [Filter.name](../Filter_object/Filter13.md) property.

## Example

The following example sets the blurX value to 30 and the blurY value to 20 for the Blur filters on the selected object(s):

```javascript
var myFilters = fl.getDocumentDOM().getFilters();
for (var i = 0; i < myFilters.length; i++) {
    if (myFilters[i].name == "blurFilter") {
        myFilters[i].blurX = 30;
        myFilters[i].blurY = 20;
    }
}
fl.getDocumentDOM().setFilters(myFilters);
```

## See also

[Document.setFilterProperty()](../Document_object/Document520.md), [Filter.blurY](../Filter_object/Filter2.md)
