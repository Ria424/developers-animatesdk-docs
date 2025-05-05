# Document.saveAndCompact() - dropped

## Availability

Flash MX 2004. *Dropped in Flash Professional CS6.*

## Usage

Document.saveAndCompact([bOkToSaveAs])

## Parameters

**bOkToSaveAs** `boolean?true`; An optional parameter that, if true or omitted and the file was never saved, opens the Save As dialog box. If false and the file was never saved, the file is not saved. The default value is true.

## Returns

`boolean`; true if the save-and-compact operation completes successfully; false otherwise.

## Example

The following example saves and compacts the current document:

```javascript
fl.getDocumentDOM().saveAndCompact();
```

## See also

- [Document.save()](../Document_object/Document370.md)
- [Flash.saveDocumentAs()](../Flash_object/Flash65.md)
- [Flash.saveDocument()](../Flash_object/Flash64.md)
- [Flash.saveAll()](../Flash_object/Flash63.md).
