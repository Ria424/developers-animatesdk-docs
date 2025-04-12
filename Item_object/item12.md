## Item.linkageURL

#### Availability

Flash MX 2004.

#### Usage

item.linkageURL

#### Description

Property; a string that specifies the URL where the SWF file containing the shared asset is located. Animate ignores this property if [Item.linkageImportForRS](../Item_object/Item11.md), [Item.linkageExportForAS](../Item_object/Item7.md), and [Item.linkageExportForRS](../Item_object/Item8.md) are set to false. Conversely, this property must be set when any of those properties are set to true. You can specify a web URL or a filename in platform-dependent format (that is, forward slashes \[/\] or backward slashes \[\\\], depending on the platform).

#### Example

The following example specifies a linkage URL for the specified library item:

```javascript
fl.getDocumentDOM().library.items[0].linkageURL = "theShareSWF.swf";
```

#### See also

[Item.linkageIdentifier](../Item_object/Item10.md)
