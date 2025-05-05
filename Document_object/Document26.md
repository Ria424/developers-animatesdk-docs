# Document.canRevert()

## Availability

Flash MX 2004.

## Usage

Document.canRevert()

## Parameters

None.

## Returns

`boolean`; true if you can use the document.revert() or fl.revertDocument() methods successfully;
false otherwise.

## Description

Method; determines whether you can use the [Document.revert()](../Document_object/Document340.md) or [Flash.revertDocument()](../Flash_object/Flash61.md) method successfully.

## Example

The following example checks whether the current document can revert to the previously saved version. If so,fl.getDocumentDOM().revert() restores the previously saved version.

```javascript
if (fl.getDocumentDOM().canRevert()) {
    fl.getDocumentDOM().revert();
}
```
