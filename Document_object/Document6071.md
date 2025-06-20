# Document.importCanvasPublishTemplate()

## Availability

Animate 2020.

## Usage

Document.importCanvasPublishTemplate(pathURI)

## Parameters

### **pathURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the path of the HTML template.

## Returns

True if imported successfully.False otherwise.

### Type

```typescript
boolean
```

## Description

Method; Imports and sets the HTML5 Canvas Publishing Template for given document,from the specified location pathURI.This method is specific to HTML Canvas document only.

## Example

The following example replace the tagged swatch with the given name"Oldswatch" to the given new swatch object swatch1.

```javascript
var pathURI = "file:///C|/Users/username/desktop/CanvasTemplate.html";
var exportFlag = fl.getDocumentDOM().importCanvasPublishTemplate(pathURI);
if (!exportFlag)
    fl.trace("Template could not be imported");
```
