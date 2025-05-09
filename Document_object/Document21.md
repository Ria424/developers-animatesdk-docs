# Document.asVersion

## Availability

Flash CS3 Professional.

## Description

Property; `integer`; Specifies which version of ActionScript is being used in the specified document. Acceptable values are 1, 2, and 3.
To determine the targeted player version for the specified document, use [Document.getPlayerVersion()](../Document_object/Document82.md); this method returns a string, so it can be used by Flash® Lite™ players.

## Example

The following example sets the version of ActionScript in the current document to ActionScript 2.0 if it is currently set as ActionScript 1.0.

```javascript
if (fl.getDocumentDOM().asVersion == 1) {
    fl.getDocumentDOM().asVersion = 2;
}
```

## See also

- [Document.as3Dialect](../Document_object/Document17.md)
- [Document.getPlayerVersion()](../Document_object/Document82.md)
