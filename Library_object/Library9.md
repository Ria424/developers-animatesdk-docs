# Library.itemExists()

## Availability

Flash MX 2004.

## Usage

Library.itemExists(namePath)

## Parameters

### **namePath**

#### Type

```typescript
string
```

#### Description

Specifies the name of the item. If the item is in a folder, specify its name and path using slash notation.

## Returns

`boolean`; True if the specified item exists in the library; *false* otherwise.

## Description

Method; Checks to see if a specified item exists in the library.

## Example

The following example displays true or false in a dialog box, depending on whether the item Symbol_1 exists in the Folder_1 library folder:

```javascript
alert(fl.getDocumentDOM().library.itemExists("Folder_1/Symbol_1"));
```
