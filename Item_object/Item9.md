# Item.linkageExportInFirstFrame

## Availability

Flash MX 2004.

## Usage

item.linkageExportInFirstFrame

## Description

Property; `boolean`; If true, the item is exported in the first frame; if false, the item is exported in the frame of the first instance. If the item does not appear on the Stage, it isn’t exported.
This property can be set to true only when [Item.linkageExportForAS](../Item_object/Item7.md) and/or [Item.linkageExportForRS](../Item_object/Item8.md) are set to true.

## Example

The following example specifies that the specified library item is exported in the first frame:

```javascript
fl.getDocumentDOM().library.items[0].linkageExportInFirstFrame = true;
```
