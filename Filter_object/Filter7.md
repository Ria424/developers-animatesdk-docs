# Filter.enabled

## Availability

Flash CS3 Professional.

## Description

Property; `boolean`; A boolean value that specifies whether the specified filter is enabled (true) or disabled (false).

## Example

The following example disables the Color filters on the selected object(s):

```javascript
var myFilters = fl.getDocumentDOM().getFilters();
for (var i = 0; i < myFilters.length; i++) {
    if (myFilters[i].name == "adjustColorFilter") {
        myFilters[i].enabled = false;
    }
}
fl.getDocumentDOM().setFilters(myFilters);
```
