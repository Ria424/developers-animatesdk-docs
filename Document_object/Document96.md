# Document.importSWF() - dropped

## Availability

Flash MX 2004. *Dropped in Adobe Animate.*

## Usage

document.importSWF(fileURI)

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the file for the SWF file to import.

## Returns

Nothing.

### Type

```typescript
void
```

## Example

The following example imports the "mySwf.swf" file from the Flash Configuration folder:

```javascript
fl.getDocumentDOM().importSWF(fl.configURI + "mySwf.swf");
```

## See also

[Document.importFile()](../Document_object/Document93.md)
