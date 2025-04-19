## Library.updateItem()

#### Availability

Flash MX 2004.

#### Usage

Library.updateItem([namePath])

#### Parameters

**namePath** `string`; Specifies the name of the item. If the item is in a folder, specify its name and path using slash notation. This is the same as right-clicking on an item and selecting Update from the menu in the user interface. If no name is provided, the current selection is updated. This parameter is optional.

#### Returns

`boolean`; *true* if Flash updated the item successfully; *false* otherwise.

#### Description

Method; Updates the specified item.

#### Example

The following example displays a dialog box that shows whether the currently selected item is updated (true) or not (false):

```javascript
alert(fl.getDocumentDOM().library.updateItem());
```
