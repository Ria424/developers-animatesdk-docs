# Flash.getDocumentDOM()

## Availability

Flash MX 2004.

## Usage

fl.getDocumentDOM()

## Parameters

None.

## Returns

A [Document object](../Document_object/Document_summary.md), or null if no documents are open.

### Type

```typescript
Document
```

## Description

Method; Retrieves the DOM ([Document object](../Document_object/Document_summary.md)) of the currently active document (FLA file). If one or more documents are open but a document does not currently have focus (for example, if a JSFL file has focus), retrieves the DOM of the most recently active document.

## Example

The following example displays the name of the current or most recently active document in the Output panel:

```javascript
var currentDoc = fl.getDocumentDOM();
fl.trace(currentDoc.name);
```
