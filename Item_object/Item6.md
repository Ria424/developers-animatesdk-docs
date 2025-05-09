# Item.linkageClassName

## Availability

Flash MX 2004.

## Description

Property; `string`; Specifies the ActionScript 2.0 class that will be associated with the symbol. (To specify this value for an ActionScript 3.0 class, use [Item.linkageBaseClass](../Item_object/Item5.md))
For this property to be defined, the [Item.linkageExportForAS](../Item_object/Item7.md) and/or [Item.linkageExportForRS](../Item_object/Item8.md) properties must be set to true, and the [Item.linkageImportForRS](../Item_object/Item11.md) property must be set to false.

## Example

The following example specifies that the ActionScript 2.0 class name associated with the first item in the library ismyClass:

```javascript
fl.getDocumentDOM().library.items[0].linkageClassName = "myClass";
```
