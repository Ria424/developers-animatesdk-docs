# FLfile.getSize()

## Availability

Flash MX 2004 7.2.

## Usage

FLfile.getSize(fileURI)

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

Expressed as a file:/// URI, specifying the file whose size you want to retrieve.

## Returns

An integer that represents the size of the specified file, in bytes, or 0 if the file doesn’t exist.

### Type

```typescript
integer
```

## Description

Method; Returns an integer that represents the size of the specified file, in bytes, or 0 if the file doesn’t exist. If the return value is 0, you can use [FLfile.exists()](../FLfile_object/FLfile2.md) to determine whether the file is a zero-byte file or the file doesn’t exist.
This method returns correct file size values only for files that are less than or equal to 2GB in size.

## Example

The following example stores the size of the mydata.txt file in the fileSize variable:

```javascript
var URL = "file:///c|/temp/mydata.txt";
var fileSize = FLfile.getSize(URL);
```
