# Document.getDataFromDocument()

## Availability

Flash MX 2004.

## Usage

document.getDataFromDocument(name)

## Parameters

**name** `string`; Specifies the name of the data to return.

## Returns

The specified data.

## Description

Method; Retrieves the value of the specified data. The type returned depends on the type of data that was stored.

## Example

The following example adds an integer value of 12 to the current document and uses this method to display the value in the Output panel:

```javascript
fl.getDocumentDOM().addDataToDocument("myData", "integer", 12);
fl.trace(fl.getDocumentDOM().getDataFromDocument("myData"));
```

## See also

- [Document.addDataToDocument()](../Document_object/Document1.md)
- [Document.documentHasData()](../Document_object/Document53.md)
- [Document.removeDataFromDocument()](../Document_object/Document250.md)
