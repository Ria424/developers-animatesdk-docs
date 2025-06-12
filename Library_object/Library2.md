# Library.deleteItem()

## Availability

Flash MX 2004.

## Usage

Library.deleteItem([namePath])

## Parameters

### **namePath**

#### Type

```typescript
string
```

#### Description

A string that specifies the name of the item to be deleted. If the item is in a folder, you can specify its name and path using slash notation. If you pass a folder name, the folder and all its items are deleted. If no name is specified, Flash deletes the currently selected item or items. To delete all the items in the Library panel, select all items before using this method. This parameter is optional.

## Returns

*true* if the items are successfully deleted; *false* otherwise.

### Type

```typescript
boolean
```

## Description

Method; Deletes the current items or a specified item from the Library panel. This method can affect multiple items if several are selected.

## Example

The following example deletes the currently selected item:

```javascript
fl.getDocumentDOM().library.deleteItem();
```

The following example deletes the item Symbol_1 from the library folder Folder_1:

```javascript
fl.getDocumentDOM().library.deleteItem("Folder_1/Symbol_1");
```
