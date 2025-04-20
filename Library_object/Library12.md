## Library.newFolder()

#### Availability

Flash MX 2004.

#### Usage

Library.newFolder([folderPath])

#### Parameters

**folderPath** A string that specifies the name of the folder to be created. If it is specified as a path, and the path doesn’t exist, the path is created. This parameter is optional.

#### Returns

`boolean`; true if folder is created successfully; *false* otherwise.

#### Description

Method; Creates a new folder with the specified name, or a default name (*"untitled folder \#"*) if no *folderName* parameter is provided, in the currently selected folder.

#### Example

The following example creates two new library folders. The second folder is a subfolder of the first folder:

```javascript
fl.getDocumentDOM().library.newFolder("first/second");
```
