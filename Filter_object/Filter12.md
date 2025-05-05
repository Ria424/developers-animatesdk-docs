# Filter.knockout

## Availability

Flash 8.

## Usage

filter.knockout

## Description

Property; `boolean`; A boolean value that specifies whether the filter is a knockout filter (true) or not (false). This property is defined for Filter objects with a value of "bevelFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", or "gradientGlowFilter" for the [Filter.name](../Filter_object/Filter13.md) property.

## Example

The following example sets the knockout property to true for the Glow filters on the selected object(s):

```javascript
var myFilters = fl.getDocumentDOM().getFilters();
for (var i = 0; i < myFilters.length; i++) {
    if (myFilters[i].name == "glowFilter") {
        myFilters[i].knockout = true;
    }
}
fl.getDocumentDOM().setFilters(myFilters);
```

## See also

[Document.setFilterProperty()](../Document_object/Document520.md)
