# Document.library

## Availability

Flash MX 2004.

## Description

Read-only property; `Library`; The [Library object](../Library_object/Library_summary.md) for a document.

## Example

The following example gets the library for the currently focused document:

```javascript
var myCurrentLib = fl.getDocumentDOM().library;
```

Assuming the currently focused document is not `fl.documents[1]`, the following example gets the library for a nonfocused library or for a library you opened using File >Open as external library:

```javascript
var externalLib = fl.documents[1].library;
```
