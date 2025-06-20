# Flash.setActiveWindow()

## Availability

Flash MX 2004.

## Usage

fl.setActiveWindow(document [, bActivateFrame])

## Parameters

### **document**

#### Type

```typescript
Document
```

#### Description

A [Document object](../Document_object/Document_summary.md) that specifies the document to select as the active window.

### **bActivateFrame**

#### Type

```typescript
boolean?
```

#### Description

An optional parameter that is ignored by Flash and Fireworks and is present only for compatibility with Dreamweaver.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; sets the active window to be the specified document. This method is also supported by Dreamweaver and Fireworks. If the document has multiple views (created by Window > Duplicate Window), the most recently active view is selected.

## Example

The following example shows two ways to activate a specified document:

```javascript
fl.setActiveWindow(fl.documents[0]);

var theIndex = fl.findDocumentIndex("myFile.fla");
fl.setActiveWindow(fl.documents[theIndex]);
```
