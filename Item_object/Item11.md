# Item.linkageImportForRS

## Availability

Flash MX 2004.

## Description

Property; `boolean`; If true, the item is imported for run-time sharing. If this property is set to true, both [Item.linkageExportForAS](../Item_object/Item7.md) and [Item.linkageExportForRS](../Item_object/Item8.md) must be set to false. Also, you must specify an identifier ([Item.linkageIdentifier](../Item_object/Item10.md)) and a URL ([Item.linkageURL](../Item_object/Item12.md)).

## Example

The following example sets this property to true for the specified library item:

```javascript
fl.getDocumentDOM().library.items[0].linkageImportForRS = true;
```
