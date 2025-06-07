# Document.allowScreens() - dropped

## Availability

Flash MX 2004
*Dropped in Adobe Animate*

## Parameters

None.

## Returns

`boolean`; true if `Document.screenOutline` can be used safely; false otherwise.

## Example

The following example determines whether screens methods can be used in the current document:

```javascript
if (fl.getDocumentDOM().allowScreens()) {
    fl.trace("screen outline is available.");
} else {
    fl.trace("whoops, no screens.");
}
```

## See also

[Document.screenOutline - dropped](../Document_object/Document410.md)
