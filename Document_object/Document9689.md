# Document.setSelectionRect()

## Availability

Flash MX 2004; *bContactSensitiveSelection* parameter added in Flash 8.

## Usage

Document.setSelectionRect(rect [, bReplaceCurrentSelection [, bContactSensitiveSelection]])

## Parameters

**rect** `RectangleBounds`; A rectangle to set as selected. For information on the format of *rect*, see [Document.addNewRectangle()](../Document_object/Document10.md).

**bReplaceCurrentSelection** `boolean?true`; Specifies whether the method replaces the current selection (true) or adds to the current selection (false). The default value is true.

**bContactSensitiveSelection** `boolean?false` Specifies whether the Contact Sensitive selection mode is enabled (true) or disabled (false) during object selection. The default value is false.

## Returns

Nothing.

## Description

Method; Draws a rectangular selection marquee relative to the Stage, using the specified coordinates. This is unlike
`Document.getSelectionRect()`, in which the rectangle is relative to the object being edited.
This method is equivalent to dragging a rectangle with the Selection tool. An instance must be fully enclosed by the rectangle to be selected.
If you pass a value for *bContactSensitiveSelection*, it is valid only for this method and doesn’t affect the Contact Sensitive selection mode for the document (see [Flash.contactSensitiveSelection](../Flash_object/Flash14.md)).

***Note:** Repeating `setSelectionRect()` using the History panel or menu item repeats the step previous to the `setSelectionRect()` operation.*

## Example

In the following example, the second selection replaces the first one:

```javascript
fl.getDocumentDOM().setSelectionRect({left: 1, top: 1, right: 200, bottom: 200});
fl.getDocumentDOM().setSelectionRect({left: 364.0, top: 203.0, right: 508.0, bottom: 434.0}, true);
```

In the following example, the second selection is added to the first selection. This is the same as the manual operation of holding down Shift and selecting a second object.

```javascript
fl.getDocumentDOM().setSelectionRect({left: 1, top: 1, right: 200, bottom: 200});
fl.getDocumentDOM().setSelectionRect({left: 364.0, top: 203.0, right: 508.0, bottom: 434.0}, false);
```

## See also

- [Document.getSelectionRect()](../Document_object/Document84.md)
- [Document.selection](../Document_object/Document430.md)
- [Document.setSelectionBounds()](../Document_object/Document9658.md)
