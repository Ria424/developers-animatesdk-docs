# VideoItem.exportToFLV()

## Availability

Flash CS4 Professional.

## Usage

VideoItem.exportToFLV(fileURI)

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the path and name of the exported file.

## Returns

True if the file is exported successfully; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; Exports the specified item to an FLV file.

## Example

Assuming that the first item in the Library is a video item, the following code exports it as an FLV file:

```javascript
var videoFileURL = "file:///C|/out.flv";
var libItem = fl.getDocumentDOM().library.items[0];
libItem.exportToFLV(videoFileURL);
```
