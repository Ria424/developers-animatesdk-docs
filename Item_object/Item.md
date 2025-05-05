## Item.addData()

#### Availability

Flash MX 2004.

#### Usage

Item.addData(name, type, data)

#### Parameters

**name** `string`; Specifies the name of the data.

**type** `"byteArray" | "double" | "doubleArray" | "integer" | "integerArray" | "string"`; Specifies the type of data. Valid types are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".

**data** `byte[] | double | double[] | integer | integer[] | string`; The data to add to the specified library item. The type of data depends on the value of the type parameter. For example, if type is "integer", the value of data must be an integer, and so on.

#### Returns

Nothing.

#### Description

Method; Adds specified data to a library item.

#### Example

The following example adds data named myData with an integer value of 12 to the first item in the library:

```javascript
fl.getDocumentDOM().library.items[0].addData("myData", "integer", 12);
```
