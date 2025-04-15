## Filter.hue

#### Availability

Flash 8.

#### Usage

filter.hue

#### Description

Property; `float`; a float value that specifies the hue of the filter. Acceptable values are between -180 and 180. This property is defined for Filter objects with a value of "adjustColorFilter" for the [Filter.name](../Filter_object/Filter13.md) property.

#### Example

The following example sets the hue to 120 for the Adjust Color filters on the selected object(s):

```javascript
var myFilters = fl.getDocumentDOM().getFilters();
for (var i = 0; i < myFilters.length; i++) {
    if (myFilters[i].name == "adjustColorFilter") {
        myFilters[i].hue = 120;
    }
}
fl.getDocumentDOM().setFilters(myFilters);
```
