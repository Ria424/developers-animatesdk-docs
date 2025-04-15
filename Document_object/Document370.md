## Document.save()

#### Availability

Flash MX 2004.

#### Usage

document.save([bOkToSaveAs])

#### Parameters

**bOkToSaveAs** `boolean`; An optional parameter that, if true or omitted, and the file was never saved, opens the Save As dialog box. If false and the file was never saved, the file is not saved.

#### Returns

`boolean`; A boolean value: true if the save operation completes successfully; false otherwise.

#### Description

Method; saves the document in its default location. This method is equivalent to selecting File>Save. To specify a name for the file (instead of saving it with the same name), use [Flash.saveDocument()](../Flash_object/Flash64.md).

***Note:** If the file is new and has not been modified or saved, or if the file has not been modified since the last time it was saved, this method has no effect and false is returned. To allow an unsaved or unmodified file to be saved, use [Flash.saveDocumentAs()](../Flash_object/Flash65.md).*

#### Example

The following example saves the current document in its default location:

```javascript
fl.getDocumentDOM().save();
```

#### See also

[Flash.saveAll()](../Flash_object/Flash63.md), [Flash.saveDocument()](../Flash_object/Flash64.md), [Flash.saveDocumentAs()](../Flash_object/Flash65.md).
