# Library.renameItem()

## Availability

Flash MX 2004.

## Usage

Library.renameItem(name)

## Parameters

### **name**

#### Type

```typescript
string
```

#### Description

Specifies a new name for the library item.

## Returns

*true* if the name of the item changes successfully, *false* otherwise. If multiple items are selected, no names are changed, and the return value is *false* (to match user interface behavior).

### Type

```typescript
boolean
```

## Description

Method; Renames the currently selected library item in the Library panel.

## Example

The following example renames the currently selected library item to new name:

```javascript
fl.getDocumentDOM().library.renameItem("new name");
```
