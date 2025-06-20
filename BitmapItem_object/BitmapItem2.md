# BitmapItem.exportToFile()

## Availability

Flash CS4 Professional.

## Usage

BitmapItem.exportToFile(fileURI, quality)

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the path and name of the exported file.

### **quality**

#### Type

```typescript
number
```

#### Description

A integer, from 1-100, that determines the quality of the exported image file. A higher number indicates higher quality. The default is 80. New in Flash CS6 Professional.

## Returns

A boolean value of true if the file was exported successfully; *false* otherwise.

### Type

```typescript
boolean
```

## Description

Method; Exports the specified item to a PNG or JPG file.

## Example

```javascript
// Assuming the first item in the Library is a bitmap item, the following code exports it as a JPG file:

var imageFileURL = "file:///C|/exportTest/out.jpg";
var libItem = fl.getDocumentDOM().library.items[0];
libItem.exportToFile(imageFileURL);
```
