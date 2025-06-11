# Document.convertToDoc()

## Availability

Animate 2020.

## Usage

Document.convertToDoc(fileURI, doctype [, fileClose])

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the path of the generated file after conversion.

### **docType**

#### Type

```typescript
string
```

#### Description

The required document type to be generated. To find document type, you can use `Document.type` property. For example, `fl.trace(fl.getDocumentDOM().type)`.

### **fileClose**

#### Type

```typescript
boolean?
```

#### Description

Specifies whether to close the generated file after conversion. Specifying true closes the generated file. The default is false. It is optional.

## Returns

`boolean`; True if document converted to expected document type successfully. False otherwise.

## Description

Method; Converts a document to expected document type.

## Example

The following example browse for a document and convert it to other document type.

```javascript
var fileURI = fl.browseForFileURL("open", "open");
var doc = fl.openDocument(fileURI);
var sr = "";
sr += fileURI;
fl.trace("fileuri: " + fileURI);
var str = sr.substring(0, sr.lastIndexOf("/"));
doc.convertToDoc("fileURI", "htmlcanvas", true);
```
