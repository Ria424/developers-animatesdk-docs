# Library.addItemToDocument()

## Availability

Flash MX 2004.

## Usage

Library.addItemToDocument(position [, namePath])

## Parameters

**position** `Point`; Specifies the *x,y* position of the center of the item on the Stage.

**namePath** `string`; Specifies the name of the item. If the item is in a folder, you can specify its name and path using slash notation. If *namePath* is not specified, the current library selection is used. This parameter is optional.

## Returns

`boolean`; *true* if the item is successfully added to the document; *false* otherwise.

## Description

Method; Adds the current or specified item to the Stage at the specified position.

## Example

The following example adds the currently selected item to the Stage at the (3, 60) position:

```javascript
fl.getDocumentDOM().library.addItemToDocument({x: 3, y: 60});
```

The following example adds the item Symbol1 located in folder1 of the library to the Stage at the (550, 485) position:

```javascript
fl.getDocumentDOM().library.addItemToDocument({x: 550.0, y: 485.0}, "folder1/Symbol1");
```
