## Document.removeDataFromDocument()

#### Availability

Flash MX 2004.

#### Usage

document.removeDataFromDocument(name)

#### Parameters

**name** A string that specifies the name of the data to remove.

#### Returns

Nothing.

#### Description

Method; removes persistent data with the specified name that has been attached to the document.

#### Example

The following example removes from the document the persistent data named "myData":

```javascript
fl.getDocumentDOM().removeDataFromDocument("myData");
```

#### See also

[Document.addDataToDocument()](../Document_object/Document1.md), [Document.documentHasData()](../Document_object/Document53.md), [Document.getDataFromDocument()](../Document_object/Document76.md)
