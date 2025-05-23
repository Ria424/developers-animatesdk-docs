# Document.as3Dialect

## Availability

Flash CS3 Professional.

## Description

Property; `string`; A string that describes the ActionScript 3.0 "dialect" being used in the specified document. The default value is "AS3". If you wish to allow prototype classes, as permitted in earlier ECMAScript specifications, set this value to "ES".

## Example

The following example specifies that the dialect being used in the current document is ECMAScript:

```javascript
fl.getDocumentDOM().as3Dialect = "ES";
```

## See also

[Document.asVersion](../Document_object/Document21.md)
