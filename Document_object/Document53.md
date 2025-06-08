# Document.documentHasData()

## Availability

Flash MX 2004.

## Usage

Document.documentHasData(name)

## Parameters

### **name**

#### Type

```typescript
string
```

#### Description

Specifies the name of the data to check.

## Returns

`boolean`; true if the document has persistent data; false otherwise.

## Description

Method; checks the document for persistent data with the specified name.

## Example

The following example checks the document for persistent data with the name "myData":

```javascript
var hasData = fl.getDocumentDOM().documentHasData("myData");
```

## See also

- [Document.addDataToDocument()](../Document_object/Document1.md)
- [Document.getDataFromDocument()](../Document_object/Document76.md)
- [Document.removeDataFromDocument()](../Document_object/Document250.md)
