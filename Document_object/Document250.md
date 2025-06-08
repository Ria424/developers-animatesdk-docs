# Document.removeDataFromDocument()

## Availability

Flash MX 2004.

## Usage

Document.removeDataFromDocument(name)

## Parameters

### **name**

#### Type

```typescript
string
```

#### Description

The name of the data to remove.

## Returns

Nothing.

## Description

Method; Removes persistent data with the specified name that has been attached to the document.

## Example

The following example removes from the document the persistent data named "myData":

```javascript
fl.getDocumentDOM().removeDataFromDocument("myData");
```

## See also

- [Document.addDataToDocument()](../Document_object/Document1.md)
- [Document.documentHasData()](../Document_object/Document53.md)
- [Document.getDataFromDocument()](../Document_object/Document76.md)
