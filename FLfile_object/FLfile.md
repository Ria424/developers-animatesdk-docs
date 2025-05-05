# FLfile.copy()

## Availability

Flash MX 2004 7.2.

## Usage

FLfile.copy(fileURI, copyURI)

## Parameters

**fileURI** `string`; Expressed as a file:/// URI, that specifies the file you want to copy.

**copyURI** `string`; Expressed as a file:/// URI, that specifies the location and name of the copied file.

## Returns

`boolean`; A boolean value of true if successful; false otherwise.

## Description

Method; Copies a file from one location to another. This method returns *false* if *copyURI* already exists.

## Example

The following example makes a backup copy of a configuration file named config.ini and places it inside the same folder in which it is located, with a new name:

```javascript
var originalFileURI = "file:///C|/Program Files/MyApp/config.ini";
var newFileURI = "file:///C|/Program Files/MyApp/config_backup.ini";
FLfile.copy(originalFileURI, newFileURI);
```

If you prefer, you can perform the same task with a single command:

```javascript
FLfile.copy("file:///C|:/Program Files/MyApp/config.ini", "file:///C|/Program Files/MyApp/config_backup.ini");
```
