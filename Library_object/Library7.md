# Library.getItemType()

## Availability

Flash MX 2004.

## Usage

Library.getItemType([namePath])

## Parameters

### **namePath**

#### Type

```typescript
string?
```

#### Description

A string that specifies the name of the item. If the item is in a folder, specify its name and path using slash notation. If *namePath* is not specified, Flash provides the type of the current selection. If more than one item is currently selected and no *namePath* is provided, Flash ignores the command. This parameter is optional.

## Returns

A string value specifying the type of object. For possible return values, see [Item.itemType](../Item_object/Item4.md).

### Type

```typescript
string
```

## Description

Method; Gets the type of object currently selected or specified by a library path.

## Example

The following example shows a dialog box that contains the item type of Symbol_1 located in the Folder_1/Folder_2 folder:

```javascript
alert(fl.getDocumentDOM().library.getItemType("Folder_1/Folder_2/Symbol_1"));
```
