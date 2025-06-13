# Document.match()

## Availability

Flash MX 2004.

## Usage

Document.match(bWidth, bHeight [, bUseDocumentBounds])

## Parameters

### **bWidth**

#### Type

```typescript
boolean
```

#### Description

A boolean value that, when set to true, causes the method to make the widths of the selected items the same.

### **bHeight**

#### Type

```typescript
boolean
```

#### Description

A boolean value that, when set to true, causes the method to make the heights of the selected items the same.

### **bUseDocumentBounds**

#### Type

```typescript
boolean?
```

#### Description

A boolean value that, when set to true, causes the method to match the size of the objects to the bounds of the document. Otherwise, the method uses the bounds of the largest object. The default is false. This parameter is optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Makes the size of the selected objects the same.

## Example

The following example matches the width of the selected objects only:

```javascript
fl.getDocumentDOM().match(true, false);
```

The following example matches the height only:

```javascript
fl.getDocumentDOM().match(false, true);
```

The following example matches the width only to the bounds of the document:

```javascript
fl.getDocumentDOM().match(true, false, true);
```

## See also

- [Document.getAlignToDocument()](../Document_object/Document72.md)
- [Document.setAlignToDocument()](../Document_object/Document450.md)
