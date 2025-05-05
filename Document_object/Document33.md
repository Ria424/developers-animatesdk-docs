# Document.close()

## Availability

Flash MX 2004.

## Usage

Document.close([bPromptToSaveChanges])

## Parameters

**bPromptToSaveChanges** `boolean?true`; A boolean value that, when set to true, causes the method to prompt the user with a dialog box if there are unsaved changes in the document. If *bPromptToSaveChanges* is set to false, the user is not prompted to save any changed documents. The default value is true. This parameter is optional.

## Returns

Nothing.

## Description

Method; Closes the specified document.

## Example

The following example closes the current document and prompts the user with a dialog box to save changes:

```javascript
fl.getDocumentDOM().close();
```

The following example closes the current document without saving changes:

```javascript
fl.getDocumentDOM().close(false);
```
