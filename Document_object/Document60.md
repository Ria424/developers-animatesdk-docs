# Document.enterEditMode()

## Availability

Flash MX 2004.

## Usage

Document.enterEditMode([editMode])

## Parameters

**editMode** `"inPlace" | "newWindow"?`; Specifies the editing mode. Acceptable values are "inPlace" or "newWindow". If no parameter is specified, the default is symbol-editing mode. This parameter is optional.

## Returns

Nothing.

## Description

Method; Switches the authoring tool into the editing mode specified by the parameter. If no parameter is specified, the method defaults to symbol-editing mode, which has the same result as right-clicking the symbol to invoke the context menu and selecting Edit.

## Example

The following example puts Flash in edit-in-place mode for the currently selected symbol:

```javascript
fl.getDocumentDOM().enterEditMode("inPlace");
```

The following example puts Flash in edit-in-new-window mode for the currently selected symbol:

```javascript
fl.getDocumentDOM().enterEditMode("newWindow");
```

## See also

[Document.exitEditMode()](../Document_object/Document61.md)
