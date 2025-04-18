## Document.setTextSelection()

#### Availability

Flash MX 2004.

#### Usage

document.setTextSelection(startIndex, endIndex)

#### Parameters

**startIndex** `integer`; An integer that specifies the position of the first character to select. The first character position is 0 (zero).

**endIndex** `integer`; An integer that specifies the end position of the selection up to, but not including, *endIndex*. The first character position is 0 (zero).

#### Returns

A Boolean value: true if the method can successfully set the text selection; false otherwise.

#### Description

Method; sets the text selection of the currently selected text field to the values specified by the *startIndex* and *endIndex* values. Text editing is activated, if it isn’t already.

#### Example

The following example selects the text from the 6th character through the 25th character:

```javascript
fl.document.setTextSelection(5, 25);
```
