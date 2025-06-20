# Library.duplicateItem()

## Availability

Flash MX 2004.

## Usage

Library.duplicateItem( [ namePath ] )

## Parameters

### **namePath**

#### Type

```typescript
string?
```

#### Description

Specifies the name of the item to duplicate. If the item is in a folder, you can specify its name and path using slash notation. This parameter is optional.

## Returns

*true* if the item is duplicated successfully; *false* otherwise. If more than one item is selected, Flash returns *false*.

### Type

```typescript
boolean
```

## Description

Method; Makes a copy of the currently selected or specified item. The new item has a default name (such as *item copy*) and is set as the currently selected item. If more than one item is selected, the command fails.

## Example

The following example creates a copy of the item square in the library folder test:

```javascript
fl.getDocumentDOM().library.duplicateItem("test/square");
```
