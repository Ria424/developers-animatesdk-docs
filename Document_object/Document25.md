# Document.canEditSymbol()

## Availability

Flash MX 2004.

## Usage

Document.canEditSymbol()

## Parameters

None.

## Returns

`boolean`; true if the Edit Symbols menu and functionality are available for use; false otherwise.

## Description

Method; Indicates whether the Edit Symbols menu and functionality are enabled. This is not related to whether the selection can be edited. This method should not be used to test whether fl.getDocumentDOM().enterEditMode() is allowed.

## Example

The following example displays in the Output panel the state of the Edit Symbols menu and functionality:

```javascript
fl.trace("fl.getDocumentDOM().canEditSymbol() returns: " + fl.getDocumentDOM().canEditSymbol());
```
