# Filter.hideObject

## Availability

Flash 8.

## Description

Property; `boolean`; A boolean value that specifies whether the source image is hidden (true) or displayed (false). This property is defined for Filter objects with a value of "dropShadowFilter" for the [Filter.name](../Filter_object/Filter13.md) property.

## Example

The following example sets the hideObject value to true for the Drop Shadow filters on the selected object(s):

```javascript
var myFilters = fl.getDocumentDOM().getFilters();
for (var i = 0; i < myFilters.length; i++) {
    if (myFilters[i].name == "dropShadowFilter") {
        myFilters[i].hideObject = true;
    }
}
fl.getDocumentDOM().setFilters(myFilters);
```
