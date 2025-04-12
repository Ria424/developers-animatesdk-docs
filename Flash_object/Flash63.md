## Flash.saveAll()

#### Availability

Flash MX 2004.

#### Usage

fl.saveAll()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; saves all open documents.
If a file has never been saved, the Save As dialog box displays. If a file has not been modified since the last time it was saved, the file isn’t saved. To allow an unsaved or unmodified file to be saved, use [Flash.saveDocumentAs()](../Flash_object/Flash65.md).

#### Example

The following example saves all open documents:

```javascript
fl.saveAll();
```

#### See also

[Document.save()](../Document_object/Document370.md), [Document.saveAndCompact() - dropped](../Document_object/Document380.md), [Flash.saveDocument()](../Flash_object/Flash64.md), [Flash.saveDocumentAs()](../Flash_object/Flash65.md)
