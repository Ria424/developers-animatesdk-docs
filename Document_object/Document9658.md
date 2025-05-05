# Document.setSelectionBounds()

## Availability

Flash MX 2004; *bContactSensitiveSelection* parameter added in Flash 8.

## Usage

Document.setSelectionBounds(boundingRectangle [, bContactSensitiveSelection])

## Parameters

**boundingRectangle** `RectangleBounds`; The new location and size of the selection. For information on the format of *boundingRectangle*, see [Document.addNewRectangle()](../Document_object/Document10.md).

**bContactSensitiveSelection** `boolean?false`; A boolean value that specifies whether the Contact Sensitive selection mode is enabled (true) or disabled (false) during object selection. The default value is false.

## Returns

Nothing.

## Description

Method; Moves and resizes the selection in a single operation.
If you pass a value for *bContactSensitiveSelection*, it is valid only for this method and doesn’t affect the Contact Sensitive selection mode for the document (see [Flash.contactSensitiveSelection](../Flash_object/Flash14.md)).

## Example

The following example moves the current selection to 10, 20 and resizes it to 100, 200:

```javascript
var l = 10;
var t = 20;
fl.getDocumentDOM().setSelectionBounds({left: l, top: t, right: (100 + l), bottom: (200 + t)});
```

## See also

- [Document.selection](../Document_object/Document430.md)
- [Document.setSelectionRect()](../Document_object/Document9689.md)
