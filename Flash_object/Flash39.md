## Flash.libraryPath

#### Availability

Flash CS4 Professional.

#### Usage

fl.libraryPath

#### Description

Property; a string that contains a list of items in the global ActionScript 3.0 Library path, which specifies the location of SWC files or folders containing SWC files. Items in the string are delimited by semi-colons. In the authoring tool, the items are specified by choosing Edit > Preferences > ActionScript > ActionScript 3.0 Settings.

#### Example

The following example adds the /SWC folder to the global ActionScript 3.0 Library path:

```javascript
fl.trace(fl.libraryPath);
fl.libraryPath = "/SWC;" + fl.libraryPath;
fl.trace(fl.libraryPath);
```

#### See also

[Flash.externalLibraryPath](../Flash_object_/Flash23.md), [Flash.flexSDKPath](../Flash_object_/Flash29.md), [Flash.sourcePath](../Flash_object_/Flash72.md), [Document.libraryPath](../Document_object/Document99.md)
