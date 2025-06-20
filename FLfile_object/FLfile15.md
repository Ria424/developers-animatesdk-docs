# FLfile.write()

## Availability

Flash MX 2004 7.2.

## Usage

FLfile.write(fileURI, textToWrite, [ , strAppendMode])

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

Expressed as a file:/// URI, specifying the file to which you want to write.

### **textToWrite**

#### Type

```typescript
string
```

#### Description

Representing the text you want to place in the file.

### **strAppendMode**

#### Type

```typescript
string?
```

#### Description

An optional string with the value "append", which specifies that you want to append *textToWrite* to the existing file. If omitted, *fileURI* is overwritten with *textToWrite*.

## Returns

A boolean value of true if successful; *false* otherwise.

### Type

```typescript
boolean
```

## Description

Method; Writes the specified string to the specified file (as UTF-8). If the specified file does not exist, it is created. However, the folder in which you are placing the file must exist before you use this method. To create folders, use [FLfile.createFolder()](../FLfile_object/FLfile1.md).

## Example

The following example attempts to write the string "xxx" to the file mydata.txt and displays an alert message if the write succeeded. It then attempts to append the string "aaa" to the file and displays a second alert message if the write succeeded. After executing this script, the file mydata.txt will contain only the text "xxxaaa".

```javascript
var URI = "file:///c|/temp/mydata.txt";
if (FLfile.write(URI, "xxx")) {
    alert("Wrote xxx to " + URI);
}
if (FLfile.write(URI, "aaa", "append")) {
    alert("Appended aaa to " + fileURI);
}
```

## See also

- [FLfile.createFolder()](../FLfile_object/FLfile1.md)
- [FLfile.exists()](../FLfile_object/FLfile2.md)
