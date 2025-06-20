# Flash.copyLibraryItem()

## Availability

Flash Professional CS5.

## Usage

fl.copyLibraryItem(fileURI, libraryItemPath)

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that contains the path to the FLA or XFL file.

### **libraryItemPath**

#### Type

```typescript
string
```

#### Description

A string, that specifies the path to the library item to be copied.

## Returns

True if the copy succeeds; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; silently copies a library item from a document without exposing the item in the Flash Pro user interface. Call the [document.clipPaste()](../Document_object/Document32.md) method to paste the item into the new document.

## Example

The following example illustrates use of the fl.copyLibraryItem() method to copy the armjoint-l1 library item.:

```javascript
fl.copyLibraryItem("file:///c:/users/userid/Desktop/Robot.fla", "armjoint-l1");
fl.getDocumentDOM().clipPaste(true);
```
