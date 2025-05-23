# Flash.externalLibraryPath

## Availability

Flash CS4 Professional.

## Description

Property; a string that contains a list of items in the global ActionScript 3.0 External library path, which specifies the location of SWC files used as runtime shared libraries. Items in the string are delimited by semi-colons. In the authoring tool, the items are specified by choosing Edit > Preferences > ActionScript > ActionScript 3.0 Settings.

## Example

The following example adds the /SWC_runtime folder to the global ActionScript 3.0 External library path:

```javascript
fl.trace(fl.externalLibraryPath);
fl.externalLibraryPath = "/SWC_runtime;" + fl.externalLibraryPath;
fl.trace(fl.externalLibraryPath);
```

## See also

[Flash.flexSDKPath](../Flash_object/Flash29.md), [Flash.libraryPath](../Flash_object/Flash39.md), [Flash.sourcePath](../Flash_object/Flash72.md), [Document.externalLibraryPath](../Document_object/Document69.md)
