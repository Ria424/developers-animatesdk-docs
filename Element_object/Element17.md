## Element.setPersistentData()

#### Availability

Flash MX 2004.

#### Usage

*element.setPersistentData(name, type, value)*

#### Parameters

**name** `string`; A string that specifies the name to associate with the data. This name is used to retrieve the data.

**type** `"integer" | "integerArray" | "double" | "doubleArray" | "string" | "byteArray"`; A string that defines the type of the data. The allowable values are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".

**value** `any`; Specifies the value to associate with the object. The data type of *value* depends on the value of the *type*
parameter. The specified value should be appropriate to the data type specified by the *type* parameter.

#### Returns

Nothing.

#### Description

Method; Stores data with an element. The data is available when the FLA file containing the element is reopened. Only symbols and bitmaps support persistent data.

#### Example

See [Element.getPersistentData()](../Element_object/Element2.md).
