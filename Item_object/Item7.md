# Item.linkageExportForAS

## Availability

Flash MX 2004.

## Usage

Item.linkageExportForAS

## Description

Property; `boolean`; If this property is true, the item is exported for ActionScript. You can also set the
[Item.linkageExportForRS](../Item_object/Item8.md) and [Item.linkageExportInFirstFrame](../Item_object/Item9.md) properties to true.
If you set this property to true, the [Item.linkageImportForRS](../Item_object/Item11.md) property must be set to false. Also, you must specify an identifier ([Item.linkageIdentifier](../Item_object/Item10.md)) and a URL ([Item.linkageURL](../Item_object/Item12.md)).

## Example

The following example sets this property for the specified library item:

```javascript
fl.getDocumentDOM().library.items[0].linkageExportForAS = true;
```
