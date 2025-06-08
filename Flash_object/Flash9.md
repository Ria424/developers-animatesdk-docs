# Flash.closeDocument()

## Availability

Flash MX 2004.

## Usage

fl.closeDocument(documentObject \[, bPromptToSaveChanges\])

## Parameters

### **documentObject**

#### Type

```typescript
Document
```

#### Description

A [Document object](../Document_object/Document_summary.md). If *documentObject* refers to the active document, the Document window might not close until the script that calls this method finishes executing.

### **bPromptToSaveChanges**

#### Type

```typescript
boolean?
```

#### Description

A boolean value. When *bPromptToSaveChanges* is false, the user is not prompted if the document contains unsaved changes; that is, the file is closed and the changes are discarded. If *bPromptToSaveChanges* is true, and if the document contains unsaved changes, the user is prompted with the standard yes-or-no dialog box. The default value is true. This parameter is optional.

## Returns

Nothing.

## Description

Method; closes the specified document.

## Example

The following example illustrates two ways of closing a document.

```javascript
// Closes the specified document and prompts to save changes.
fl.closeDocument(fl.documents[0]);
fl.closeDocument(fl.documents[0], true); // Use of true is optional.

// Closes the specified document without prompting to save changes.
fl.closeDocument(fl.documents[0], false);
```

## See also

[Flash.closeAll()](../Flash_object/Flash7.md)
