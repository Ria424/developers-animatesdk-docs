# FLfile.createFolder()

## Availability

Flash MX 2004 7.2.

## Usage

FLfile.createFolder(folderURI)

## Parameters

### **folderURI**

#### Type

```typescript
string
```

#### Description

A folder URI that specifies the folder structure you want to create.

## Returns

A boolean value of true if successful; false if *folderURI* already exists.

### Type

```typescript
boolean
```

## Description

Method; Creates one or more folders at the specified location.
You can create multiple folders at one time. For example, the following command creates both the MyData and the TempData folders if they don’t already exist:

`FLfile.createFolder("file:///c\|/MyData/TempData")`

## Example

The following example creates a folder and a subfolder under the configuration folder ([Flash.configURI](../Flash_object/Flash13.md)):

```javascript
fl.trace(FLfile.createFolder(fl.configURI + "folder01/subfolder01"));
```

The following example attempts to create a folder called tempFolder at the root level on the C drive and displays an alert box indicating whether the operation was successful:

```javascript
var folderURI = "file:///c|/tempFolder";
if (FLfile.createFolder(folderURI)) {
    alert("Created " + folderURI);
} else {
    alert(folderURI + " already exists");
}
```

## See also

- [FLfile.remove()](../FLfile_object/FLfile12.md)
- [FLfile.write()](../FLfile_object/FLfile15.md)
