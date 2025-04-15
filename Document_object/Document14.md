## Document.allowScreens() - dropped

#### Availability

Flash MX 2004. *Dropped in Adobe Animate.*

#### Usage

document.allowScreens()

#### Parameters

None.

#### Returns

`boolean`; A boolean value: true if `Document.screenOutline` can be used safely; false otherwise.

#### Description

*Dropped in Adobe Animate.*

#### Example

The following example determines whether screens methods can be used in the current document:

```javascript
if (fl.getDocumentDOM().allowScreens()) {
    fl.trace("screen outline is available.");
} else {
    fl.trace("whoops, no screens.");
}
```

#### See also

[Document.screenOutline - dropped](../Document_object/Document410.md)
