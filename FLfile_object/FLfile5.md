# FLfile.getCreationDateObj()

## Availability

Flash MX 2004 7.2.

## Usage

FLfile.getCreationDateObj(fileOrFolderURI)

## Parameters

### **fileOrFolderURI**

#### Type

```typescript
string
```

#### Description

Expressed as a file:/// URI, specifying the file or folder whose creation date and time you want to retrieve as a JavaScript Date object.

## Returns

A JavaScript Date object that represents the date and time when the specified file or folder was created. If the file doesn’t exist, the object contains information indicating that the file or folder was created at midnight GMT on December 31, 1969.

### Type

```typescript
Date
```

## Description

Method; Returns a JavaScript Date object that represents the date and time when the specified file or folder was created.

## Example

The following example displays (in human-readable form) the date a file was created, in the Output panel:

```javascript
// Make sure the specified file exists.
var file1Date = FLfile.getCreationDateObj("file:///c|/temp/file1.txt");
fl.trace(file1Date);
```

## See also

- [FLfile.getCreationDate()](../FLfile_object/FLfile4.md)
- [FLfile.getModificationDateObj()](../FLfile_object/FLfile7.md)
