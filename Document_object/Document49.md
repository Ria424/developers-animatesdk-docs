# Document.distribute()

## Availability

Flash MX 2004.

## Usage

Document.distribute(distributemode [, bUseDocumentBounds])

## Parameters

### **distributemode**

#### Type

```typescript
"left edge" | "horizontal center" | "right edge" | "top edge" | "vertical center" | "bottom edge"
```

#### Description

Specifies where to distribute the selected objects. Acceptable values are "left edge", "horizontal center", "right edge", "top edge", "vertical center", and "bottom edge".

### **bUseDocumentBounds**

#### Type

```typescript
boolean?
```

#### Description

A boolean value that, when set to true, distributes the selected objects using the bounds of the document. Otherwise, the method uses the bounds of the selected objects. The default is false.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Distributes the selection.

## Example

The following example distributes the selected objects by their top edges:

```javascript
fl.getDocumentDOM().distribute("top edge");
```

The following example distributes the selected objects by their top edges and expressly sets the *bUseDcoumentBounds* parameter:

```javascript
fl.getDocumentDOM().distribute("top edge", false);
```

The following example distributes the selected objects by their top edges, using the bounds of the document:

```javascript
fl.getDocumentDOM().distribute("top edge", true);
```

## See also

- [Document.getAlignToDocument()](../Document_object/Document72.md)
- [Document.setAlignToDocument()](../Document_object/Document450.md)
