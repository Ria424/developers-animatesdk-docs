# Flash.revertDocument()

## Availability

Flash MX 2004.

## Usage

fl.revertDocument(documentObject)

## Parameters

### **documentObject**

#### Type

```typescript
Document
```

#### Description

A [Document object](../Document_object/Document_summary.md). If *documentObject* refers to the active document, the Document window might not revert until the script that calls this method finishes executing.

## Returns

True if the Revert operation completes successfully; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; reverts the specified FLA document to its last saved version. Unlike the File \Revert menu option, this method does not display a warning window that asks the user to confirm the operation. See also [Document.revert()](../Document_object/Document340.md) and [Document.canRevert()](../Document_object/Document26.md).

## Example

The following example reverts the current FLA document to its last saved version; any changes made since the last save are lost.

```javascript
fl.revertDocument(fl.getDocumentDOM());
```
