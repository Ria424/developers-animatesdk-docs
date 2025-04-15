## Flash.findDocumentDOM()

#### Availability

Flash CS3 Professional.

#### Usage

fl.findDocumentDOM(id)

#### Parameters

**id** An integer that represents a unique identifier for a document.

#### Returns

`Document`; A Document object, or null if no document exists with the specified *id*.

#### Description

Method; lets you target a specific file by using its unique identifier (instead of its index value, for example). Use this method in conjunction with [Document.id](../Document_object/Document92.md).

#### Example

The following example illustrates reading a document’s ID and then using it to target that document:

```javascript
var originalDocID = fl.getDocumentDOM().id;
// other code here, maybe working in different files
var targetDoc = fl.findDocumentDOM(originalDocID);
// Set the height of the Stage in the original document to 400 pixels.
targetDoc.height = 400;
```

#### See also

[Flash.findDocumentIndex()](../Flash_object/Flash26.md)
