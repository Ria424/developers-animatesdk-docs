# Flash.browseForFolderURL()

## Availability

Flash 8.

## Usage

fl.browseForFolderURL([description])

## Parameters

### **description**

#### Type

```typescript
string?
```

#### Description

An optional string that specifies the description of the Browse For Folder dialog box. If this parameter is omitted, the dialog box title is "Select Folder."

## Returns

The URL of the folder, expressed as a file:/// URI; returns null if the user cancels out of the dialog box.

### Type

```typescript
string | null
```

## Description

Method; Displays a Browse for Folder dialog box and lets the user select a folder.

## Example

The following example lets the user select a folder and then displays a list of files in that folder:

```javascript
var folderURI = fl.browseForFolderURL("Select a folder.");
var folderContents = FLfile.listFolder(folderURI);
```

## See also

- [Flash.browseForFileURL()](../Flash_object/Flash3.md)
- [FLfile object](../FLfile_object/FLfile_summary.md)
