## Document.addDataToSelection()

#### Availability

Flash MX 2004.

#### Usage

document.addDataToSelection(name, type, data)

#### Parameters

**name** `string`; A string that specifies the name of the persistent data.

**type** `"byteArray" | "double" | "doubleArray" | "integer" | "integerArray" | "string"`; Defines the type of data. Acceptable values are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".

**data** `"byteArray" | "double" | "doubleArray" | "integer" | "integerArray" | "string"`; The value to add. Valid types depend on the *type* parameter.

#### Returns

Nothing.

#### Description

Method; stores specified data with the selected objects. Data is written to the FLA file and is available to JavaScript when the file reopens. Only symbols and bitmaps support persistent data.

#### Example

The following example adds an integer value of 12 to the selected object:

```javascript
fl.getDocumentDOM().addDataToSelection("myData", "integer", 12);
```

#### See also

[Document.removeDataFromSelection()](../Document_object/Document260.md)
