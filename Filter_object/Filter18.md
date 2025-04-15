## Filter.type

#### Availability

Flash 8.

#### Usage

filter.type

#### Description

Property; `string`; A string that specifies the type of bevel or glow. Acceptable values are "inner", "outer", and "full". This property is defined for Filter objects with a value of "bevelFilter", "gradientGlowFilter", or "gradientBevelFilter" for the [Filter.name](../Filter_object/Filter13.md) property.

#### Example

The following example sets the type to "full" for all Bevel filters on the selected object(s):

```javascript
var myFilters = fl.getDocumentDOM().getFilters();
for (var i = 0; i < myFilters.length; i++) {
    if (myFilters[i].name == "bevelFilter") {
        myFilters[i].type = "full";
    }
}
fl.getDocumentDOM().setFilters(myFilters);
```

#### See also

[Document.setFilterProperty()](../Document_object/Document520.md)
