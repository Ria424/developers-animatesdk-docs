# Flash.clipCopyString()

## Availability

Flash CS3 Professional.

## Usage

fl.clipCopyString(string)

## Parameters

### **string**

#### Type

```typescript
string
```

#### Description

A string to be copied to the Clipboard.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; copies the specified string to the Clipboard.
To copy the current selection to the Clipboard, use [Document.clipCopy()](../Document_object/Document30.md).

## Example

The following example copies the path of the current document to the Clipboard:

```javascript
var documentPath = fl.getDocumentDOM().path;
fl.clipCopyString(documentPath);
```
