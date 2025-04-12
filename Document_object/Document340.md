## Document.revert()

#### Availability

Flash MX 2004.

#### Usage

document.revert()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; reverts the specified document to its previously saved version. This method is equivalent to selecting File >Revert.

#### Example

The following example reverts the current document to the previously saved version:

```javascript
fl.getDocumentDOM().revert();
```

#### See also

[Document.canRevert()](../Document_object/Document26.md), [Flash.revertDocument()](../Flash_object_/Flash61.md).
