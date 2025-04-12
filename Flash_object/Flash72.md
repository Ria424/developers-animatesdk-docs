## Flash.sourcePath

#### Availability

Flash CS4 Professional.

#### Usage

fl.sourcePath

#### Description

Property; a string that contains a list of items in the global ActionScript 3.0 Source path, which specifies the location of ActionScript class files. Items in the string are delimited by semi-colons. In the authoring tool, the items are specified by choosing Edit > Preferences > ActionScript > ActionScript 3.0 Settings.

#### Example

The following example adds the /Classes folder to the global ActionScript 3.0 Source path:

```javascript
fl.trace(fl.sourcePath);
fl.sourcePath = "/Classes;" + fl.sourcePath;
fl.trace(fl.sourcePath);
```

#### See also

[Flash.flexSDKPath](../Flash_object/Flash29.md), [Flash.externalLibraryPath](../Flash_object/Flash23.md), [Flash.libraryPath](../Flash_object/Flash39.md), [Document.sourcePath](../Document_object/Document36.md)
