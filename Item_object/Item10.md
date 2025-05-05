# Item.linkageIdentifier

## Availability

Animate MX 2004.

## Usage

item.linkageIdentifier

## Description

Property; `string`; Specifies the name Animate will use to identify the asset when linking to the destination SWF file. Animate ignores this property if [Item.linkageImportForRS](../Item_object/Item11.md), [Item.linkageExportForAS](../Item_object/Item7.md), and [Item.linkageExportForRS](../Item_object/Item8.md) are set to false. Conversely, this property must be set when any of those properties are set to true.

## Example

The following example specifies that the string my\_mc will be used to identify the library item when it is linked to the destination SWF file to which it is being exported:

```javascript
fl.getDocumentDOM().library.items[0].linkageIdentifier = "my_mc";
```

## See also

[Item.linkageURL](../Item_object/Item12.md)
