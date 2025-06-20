# Flash.findDocumentIndex()

## Availability

Flash MX 2004.

## Usage

fl.findDocumentIndex(name)

## Parameters

### **name**

#### Type

```typescript
string
```

#### Description

The document name for which you want to find the index. The document must be open.

## Returns

An array of integers that represent the position of the document **`name`** in the fl.documents array.

### Type

```typescript
number[]
```

## Description

Method; returns an array of integers that represent the position of the document **`name`** in the fl.documents array. More than one document with the same name can be open (if the documents are located in different folders).

## Example

The following example displays information about the index position of any open files named test.fla in the Output panel:

```javascript
var filename = "test.fla"
var docIndex = fl.findDocumentIndex(filename);
for (var index in docIndex)
    fl.trace(filename + " is open at index " + docIndex[index]);
```

## See also

- [Flash.documents](../Flash_object/Flash20.md)
- [Flash.findDocumentDOM()](../Flash_object/Flash25.md)
