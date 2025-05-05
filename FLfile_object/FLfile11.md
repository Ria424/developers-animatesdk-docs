# FLfile.read()

## Availability

Flash MX 2004 7.2.

## Usage

FLfile.read(fileURI)

## Parameters

**fileURI** `string`; Expressed as a file:/// URI, specifying the text-based file (such as .js, .txt, or .jsfl) that you want to read.

## Returns

`string | null`; The contents of the specified file as a string, or null if the read fails.

## Description

Method; Returns the contents of the specified file as a string, or null if the read fails.

## Examples

The following example reads the file mydata.txt and, if successful, displays an alert box with the contents of the file.

```javascript
var fileURI = "file:///c|/temp/mydata.txt";
var str = FLfile.read(fileURI);
if (str) {
    alert(fileURL + " contains: " + str);
}
```

The following example reads the ActionScript code from a class file and stores it in the code variable:

```javascript
var classFileURI = "file:///C|/MyApplication/TextCarousel.as";
var code = FLfile.read(classFileURI);
```
