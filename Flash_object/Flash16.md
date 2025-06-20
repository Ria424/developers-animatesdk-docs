# Flash.createDocument()

## Availability

Flash MX 2004.

## Usage

fl.createDocument([docType])

## Parameters

### **docType**

#### Type

```typescript
"timeline" | "htmlcanvas" | "vrPanoDoc" | "vr360Doc"
```

#### Description

A string that specifies the type of document to create. docType values are "timeline", "htmlcanvas", "vrPanoDoc", "vr360Doc"  for AS3, HTML5 canvas , VR Panorama and VR 360 document respectively. To find document type, you can use document.type property. For example, ```fl.trace(fl.getDocumentDOM().type)```. The default value is "timeline", which has the same effect as choosing File > New > Advanced > ActionScript 3.0 document. This parameter is optional.

## Returns

The Document object for the newly created document, if the method is successful. If an error occurs, the value is
undefined.

### Type

```typescript
Document
```

## Description

Method; Opens a new document and selects it. Values for size, resolution, and color are the same as the current defaults.

## Example

The following example creates two timeline-based documents:

```javascript
// Create two AS3.0 documents and one HTML5 canvas document.
fl.createDocument();
fl.createDocument("timeline");
fl.createDocument("htmlcanvas");
```
