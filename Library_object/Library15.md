# Library.selectItem()

## Availability

Flash MX 2004.

## Usage

Library.selectItem(namePath [, bReplaceCurrentSelection [, bSelect]])

## Parameters

### **namePath**

#### Type

```typescript
string
```

#### Description

Specifies the name of the item. If the item is in a folder, you can specify its name and path using slash notation.

### **bReplaceCurrentSelection**

#### Type

```typescript
boolean?
```

#### Description

Specifies whether to replace the current selection or add the item to the current selection. The default value is true (replace current selection). This parameter is optional.

### **bSelect**

#### Type

```typescript
boolean?
```

#### Description

Specifies whether to select or deselect an item. The default value is *true* (select). This parameter is optional.

## Returns

`boolean`; *true* if the specified item exists; false otherwise.

## Description

Method; Selects a specified library item.

## Example

The following example changes the current selection in the library to Symbol_1 inside untitled Folder_1:

```javascript
fl.getDocumentDOM().library.selectItem("untitled Folder_1/Symbol_1");
```

The following example extends what is currently selected in the library to include Symbol_1 inside untitled Folder_1:

```javascript
fl.getDocumentDOM().library.selectItem("untitled Folder_1/Symbol_1", false);
```

The following example deselects Symbol_1 inside untitled Folder_1 and does not change other selected items:

```javascript
fl.getDocumentDOM().library.selectItem("untitled Folder_1/Symbol_1", true, false);
```
