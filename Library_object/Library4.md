# Library.editItem()

## Availability

Flash MX 2004.

## Usage

Library.editItem([namePath])

## Parameters

### **namePath**

#### Type

```typescript
string?
```

#### Description

Specifies the name of the item. If the item is in a folder, you can specify its name and path using slash notation. If *namePath* is not specified, the single selected library item opens in Edit mode. If none or more than one item in the library is currently selected, the first scene in the main timeline appears for editing. This parameter is optional.

## Returns

*true* if the specified item exists and can be edited; *false* otherwise.

### Type

```typescript
boolean
```

## Description

Method; Opens the currently selected or specified item in Edit mode.

## Example

The following example opens the item circle in the test folder of the library for editing:

```javascript
fl.getDocumentDOM().library.editItem("test/circle");
```
