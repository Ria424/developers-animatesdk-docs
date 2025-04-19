## Item.getData()

#### Availability

Flash MX 2004.

#### Usage

Item.getData(name)

#### Parameters

**name** `string`; Specifies the name of the data to retrieve.

#### Returns

The data specified by the *name* parameter. The type of data returned depends on the type of stored data.

#### Description

Method; Retrieves the value of the specified data.

#### Example

The following example gets the value of the data named myData from the first item in the library and stores it in the variable libData:

```javascript
var libData = fl.getDocumentDOM().library.items[0].getData("myData");
```
