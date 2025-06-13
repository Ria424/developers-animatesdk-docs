# Library.selectAll()

## Availability

Flash MX 2004.

## Usage

Library.selectAll([bSelectAll])

## Parameters

### **bSelectAll**

#### Type

```typescript
boolean?
```

#### Description

Specifies whether to select or deselect all items in the library. Omit this parameter or use the default value of true to select all the items in the library; false deselects all library items. This parameter is optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Selects or deselects all items in the library.

## Example

The following examples select all the items in the library:

```javascript
fl.getDocumentDOM().library.selectAll();
fl.getDocumentDOM().library.selectAll(true);
```

The following examples deselect all the items in the library:

```javascript
fl.getDocumentDOM().library.selectAll(false);
fl.getDocumentDOM().library.selectNone();
```
