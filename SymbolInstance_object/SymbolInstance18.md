# SymbolInstance.filters

## Availability

Flash 8.

## Description

Property; `Filter[]`; An array of [Filter object](../Filter_object/Filter_summary.md)s. To modify filter properties, you don’t write to this array directly. Instead, retrieve the array, set the individual properties, and then set the array to reflect the new properties.

## Example

The following example traces the name of the filter at index 0. If it is a Glow filter, its blurX property is set to 100 and the new value is written to the filters array.

```javascript
var filterName = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters[0].name;
fl.trace(filterName);

var filterArray = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters;
if (filterName == "glowFilter") {
    filterArray[0].blurX = 100;
}
fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters = filterArray;
```
