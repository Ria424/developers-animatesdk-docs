# Document.setTextSelection()

## Availability

Flash MX 2004.

## Usage

Document.setTextSelection(startIndex, endIndex)

## Parameters

**startIndex** `integer`; The position of the first character to select. The first character position is 0 (zero).

**endIndex** `integer`; The end position of the selection up to, but not including, *endIndex*. The first character position is 0 (zero).

## Returns

`boolean`; true if the method can successfully set the text selection; false otherwise.

## Description

Method; Sets the text selection of the currently selected text field to the values specified by the *startIndex* and *endIndex* values. Text editing is activated, if it isn’t already.

## Example

The following example selects the text from the 6th character through the 25th character:

```javascript
fl.document.setTextSelection(5, 25);
```
