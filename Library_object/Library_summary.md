# Library summary

## Availability

Flash MX 2004.

## Description

The Library object represents the Library panel. It is a property of the Document object and can be accessed by [Document.library](../Document_object/Document98.md).

The Library object contains an array of items of different types, including symbols, bitmaps, sounds, and video.

## Method summary

The following methods are available for the Library object:

| **Method** | **Description** |
| --- | --- |
| [Library.addItemToDocument()](../Library_object/Library.md) | Adds the current or specified item to the Stage at the specified position. |
| [Library.addNewItem()](../Library_object/Library1.md) | Creates a new item of the specified type in the Library panel and sets the new item to the currently selected item. |
| [Library.deleteItem()](../Library_object/Library2.md) | Deletes the current items or a specified item from the Library panel. |
| [Library.duplicateItem()](../Library_object/Library3.md) | Makes a copy of the currently selected or specified item. |
| [Library.editItem()](../Library_object/Library4.md) | Opens the currently selected or specified item in Edit mode. |
| [Library.findItemIndex()](../Library_object/Library5.md) | Returns the library item’s index value (zero-based). |
| [Library.getItemProperty()](../Library_object/Library6.md) | Gets the property for the selected item. |
| [Library.getItemType()](../Library_object/Library7.md) | Gets the type of object currently selected or specified by a library path. |
| [Library.getSelectedItems()](../Library_object/Library8.md) | Gets the array of all currently selected items in the library. |
| [Library.itemExists()](../Library_object/Library9.md) | Checks to see if a specified item exists in the library. |
| [Library.moveToFolder()](../Library_object/Library11.md) | Moves the currently selected or specified library item to a specified folder. |
| [Library.newFolder()](../Library_object/Library12.md) | Creates a new folder with the specified name, or a default name (*"untitled folder \#"*) if no folderName parameter is provided, in the currently selected folder. |
| [Library.renameItem()](../Library_object/Library13.md) | Renames the currently selected library item in the Library panel. |
| [Library.selectAll()](../Library_object/Library14.md) | Selects or deselects all items in the library. |
| [Library.selectItem()](../Library_object/Library15.md) | Selects a specified library item. |
| [Library.selectNone()](../Library_object/Library16.md) | Deselects all the library items. |
| [Library.setItemProperty()](../Library_object/Library17.md) | Sets the property for all selected library items (ignoring folders). |
| [Library.updateItem()](../Library_object/Library19.md) | Updates the specified item. |

## Property summary

The following property is available for the Library object:

| **Property** | **Description** |
| --- | --- |
| [Library.items](../Library_object/Library10.md) | An array of Item objects in the library. |
| [Library.unusedItems](../Library_object/Library18.md) | An array of library Items that are not used in the document. |
