## Document.documentHasData()

#### Availability

Flash MX 2004.

#### Usage

document.documentHasData(name)

#### Parameters

**name** A string that specifies the name of the data to check.

#### Returns

A Boolean value: true if the document has persistent data; false otherwise.

#### Description

Method; checks the document for persistent data with the specified name.

#### Example

The following example checks the document for persistent data with the name "myData":

```javascript
var hasData = fl.getDocumentDOM().documentHasData("myData");
```

#### See also

[Document.addDataToDocument()](../Document_object/Document1.md), [Document.getDataFromDocument()](../Document_object/Document76.md), [Document.removeDataFromDocument()](../Document_object/Document250.md)
