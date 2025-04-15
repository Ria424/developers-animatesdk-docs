## Flash.saveDocumentAs()

#### Availability

Flash MX 2004.

#### Usage

fl.saveDocumentAs(document)

#### Parameters

**document** `Document`; A [Document object](../Document_object/Document_summary.md) that specifies the document to save. If *document* is null, the active document is saved.

#### Returns

A Boolean value: true if the Save As operation completes successfully; false otherwise.

#### Description

Method; displays the Save As dialog box for the specified document.

#### Example

The following example prompts the user to save the specified document and then displays an alert message that indicates whether the document was saved:

```javascript
alert(fl.saveDocumentAs(fl.documents[1]));
```

#### See also

[Document.save()](../Document_object/Document370.md), [Document.saveAndCompact() - dropped](../Document_object/Document380.md), [Flash.saveAll()](../Flash_object/Flash63.md), [Flash.saveDocument()](../Flash_object/Flash64.md)
