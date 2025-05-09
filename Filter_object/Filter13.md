# Filter.name

## Availability

Flash 8.

## Description

Read-only property; `string`; A string that specifies the type of filter. The value of this property determines which other properties of the Filter object are available. The value is one of the following: "adjustColorFilter", "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", or "gradientGlowFilter".

## Example

The following example displays the filter names and index positions in the Output panel:

```javascript
var myFilters = fl.getDocumentDOM().getFilters();
var traceStr = "";
for (var i = 0; i < myFilters.length; i++) {
    traceStr = traceStr + " At index " + i + ": " + myFilters[i].name;
}
fl.trace(traceStr);
```

## See also

[Document.getFilters()](../Document_object/Document79.md), [Document.setFilterProperty()](../Document_object/Document520.md)
