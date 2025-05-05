# FLfile.remove()

## Availability

Flash MX 2004 7.2.

## Usage

FLfile.remove(fileOrFolderURI)

## Parameters

**fileOrFolderURI** `string`; Expressed as a file:/// URI, specifying the file or folder you want to remove (delete).

## Returns

`boolean`; A boolean value of true if successful; false otherwise.

## Description

Method; Deletes the specified file or folder. If the folder contains files, those files will be deleted as well. Files with the R (read-only) attribute cannot be removed.

## Examples

The following example warns a user if a file exists and then deletes it if the user chooses to do so:

```javascript
var fileURI = prompt("Enter file/folder to be deleted: ", "file:///c|/temp/delete.txt");
if (FLfile.exists(fileURI)) {
    var confirm = prompt("File exists. Delete it? (y/n)", "y");
    if (confirm == "y" || confirm == "Y") {
        if (FLfile.remove(fileURI)) {
            alert(fileURI + " is deleted.");
        } else {
            alert("fail to delete " + fileURI);
        }
    }
} else {
    alert(fileURI + " does not exist");
}
```

The following example deletes a configuration file created by an application:

```javascript
if (FLfile.remove("file:///C|/MyApplication/config.ini")) {
    alert("Configuration file deleted");
}
```

The following example deletes the Configuration folder and its contents:

```javascript
FLfile.remove("file:///C|/MyApplication/Configuration/");
```

## See also

- [FLfile.createFolder()](../FLfile_object/FLfile1.md)
- [FLfile.getAttributes()](../FLfile_object/FLfile3.md)
