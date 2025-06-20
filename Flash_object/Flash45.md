# Flash.openDocument()

## Availability

Flash MX 2004.

## Usage

fl.openDocument(fileURI)

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the name of the file to be opened.

## Returns

The [Document object](../Document_object/Document_summary.md) for the newly opened document, if the method is successful. If the file is not found or is not a valid FLA file, an error is reported and the script is cancelled.

### Type

```typescript
Document
```

## Description

Method; opens a Flash document (FLA file) for editing in a new Flash Document window and gives it focus. For a user, the effect is the same as selecting File > Open and then selecting a file. If the specified file is already open, the window that contains the document comes to the front. The window that contains the specified file becomes the currently selected document.

## Example

The following example opens a file named Document.fla that is stored in the root directory on the C drive. The code stores a Document object representing that document in the doc variable and sets the document to be the currently selected document. That is, until focus is changed, fl.getDocumentDOM() refers to this document.

```javascript
var doc = fl.openDocument("file:///c|/Document.fla");
```
