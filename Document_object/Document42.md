## Document.deletePublishProfile()

#### Availability

Flash MX 2004.

#### Usage

Document.deletePublishProfile()

#### Parameters

None.

#### Returns

`integer`; An integer that is the index of the new current profile. If a new profile is not available, the method leaves the current profile unchanged and returns its index.

#### Description

Method; Deletes the currently active profile, if there is more than one. There must be at least one profile left.

#### Example

The following example deletes the currently active profile, if there is more than one, and displays the index of the new currently active profile:

```javascript
alert(fl.getDocumentDOM().deletePublishProfile());
```

#### See also

[Document.addNewPublishProfile()](../Document_object/Document9.md)
