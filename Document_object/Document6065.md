# Document.deleteTaggedSwatchAtIndex()

## Availability

Animate 2020.

## Usage

Document.deleteTaggedSwatchAtIndex(index:int [,palette:int ])

## Parameters

### **index**

#### Type

```typescript
number
```

#### Description

Speifies the index of the tagged swatch to delete.

### **palette**

#### Type

```typescript
number?
```

#### Description

An optional integer that speifies the index of the tagged swatch palette, default value is 0.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Delete tagged swatch with given index.

## Example

The following example delete the tagged swatch at index 0.

```javascript
fl.getDocumentDOM().deleteTaggedSwatchAtIndex(0, 4);
```

## See also

[Document.deleteTaggedSwatchByName()](../Document_object/Document6066.md)
