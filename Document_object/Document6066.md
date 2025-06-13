# Document.deleteTaggedSwatchByName()

## Availability

Animate 2020.

## Usage

Document.deleteTaggedSwatchByName(name:string)

## Parameters

### **name**

#### Type

```typescript
string
```

#### Description

A string that indicates the name of the tagged swatch to delete.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Delete tagged swatch with given name.

## Example

The following example delete the tagged swatch of name "swatch1"

```javascript
fl.getDocumentDOM().deleteTaggedSwatchByName("swatch1");
```

## See also

[Document.deleteTaggedSwatchAtIndex()](../Document_object/Document6065.md)
