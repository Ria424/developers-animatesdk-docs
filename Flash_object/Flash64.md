# Flash.saveDocument()

## Availability

Flash MX 2004.

## Usage

fl.saveDocument(document \[, fileURI\])

## Parameters

### **document**

#### Type

```typescript
Document
```

#### Description

A [Document object](../Document_object/Document_summary.md) that specifies the document to be saved. If *document* is null, the active document is saved.

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the name of the saved document. If the *fileURI* parameter is null or omitted, the document is saved with its current name. This parameter is optional.

## Returns

true if the save operation completes successfully; false otherwise. This method save the file regardless of whether it is new, modified, or unmodified.

### Type

```typescript
boolean
```

## Description

Method; saves the specified document as a FLA document.

## Example

The following example saves the current document and two specified documents:

```javascript
// Save the current document.
alert(fl.saveDocument(fl.getDocumentDOM()));
// Save the specified documents.
alert(fl.saveDocument(fl.documents[0], "file:///C|/example1.fla"));
alert(fl.saveDocument(fl.documents[1], "file:///C|/example2.fla"));
```

## See also

[Document.save()](../Document_object/Document370.md), [Document.saveAndCompact() - dropped](../Document_object/Document380.md), [Flash.saveAll()](../Flash_object/Flash63.md), [Flash.saveDocumentAs()](../Flash_object/Flash65.md)
