# Library.addNewItem()

## Availability

Flash MX 2004.

## Usage

Library.addNewItem(type [, namePath])

## Parameters

### **type**

#### Type

```typescript
"video" | "movie clip" | "button" | "graphic" | "bitmap" | "screen" | "folder"
```

#### Description

Specifies the type of item to create. Valid values are: `"video"`, `"movie clip"`, `"button"`, `"graphic"`, `"bitmap"`, `"screen"`, and `"folder"`. You cannot use this method to add sounds. Creating a folder is equivalent to calling [Library.newFolder()](../Library_object/Library12.md) first.

### **namePath**

#### Type

```typescript
string?
```

#### Description

Specifies the name of the item to be added. If the item is in a folder, specify its name and path using slash notation. This parameter is optional.

## Returns

`boolean`; *true* if the item is successfully created; *false* otherwise.

## Description

Method; Creates a new item of the specified type in the Library panel and sets the new item to the currently selected item. For more information on importing items into the library, including items such as sounds, see [Document.importFile()](../Document_object/Document93.md).

## Example

The following example creates a new button item named start in a new folder named folderTwo:

```javascript
fl.getDocumentDOM().library.addNewItem("button", "folderTwo/start");
```
