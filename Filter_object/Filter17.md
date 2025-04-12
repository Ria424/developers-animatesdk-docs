## Filter.strength

#### Availability

Flash 8.

#### Usage

filter.strength

#### Description

Property; an integer that specifies the percentage strength of the filter. Acceptable values are between 0 and 25,500. This property is defined for Filter objects with a value of "bevelFilter", "dropShadowFilter", "glowFilter", "gradientGlowFilter", or "gradientBevelFilter" for the [Filter.name](../Filter_object/Filter13.md) property.

#### Example

The following example sets the strength to 50 for the Glow filters on the selected object(s):

```javascript
var myFilters = fl.getDocumentDOM().getFilters();
for (var i = 0; i < myFilters.length; i++) {
    if (myFilters[i].name == "glowFilter") {
        myFilters[i].strength = 50;
    }
}
fl.getDocumentDOM().setFilters(myFilters);
```

#### See also

[Document.setFilterProperty()](../Document_object/Document520.md)
