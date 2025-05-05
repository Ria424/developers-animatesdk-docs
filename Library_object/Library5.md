# Library.findItemIndex()

## Availability

Flash MX 2004.

## Usage

Library.findItemIndex(namePath)

## Parameters

**namePath** `string`; Specifies the name of the item. If the item is in a folder, you can specify its name and path using slash notation.

## Returns

`integer`; An integer value representing the item’s zero-based index value.

## Description

Method; Returns the library item’s index value (zero-based). The library index is flat, so folders are considered part of the main index. Folder paths can be used to specify a nested item.

## Example

The following example stores the zero-based index value of the library item square, which is in the test folder, in the variable sqIndex, and then displays the index value in a dialog box:

```javascript
var sqIndex = fl.getDocumentDOM().library.findItemIndex("test/square"); 
alert(sqIndex);
```
