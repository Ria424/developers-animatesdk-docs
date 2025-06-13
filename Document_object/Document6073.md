# Document.transformSelection()

## Availability

Flash MX 2004.

## Usage

Document.transformSelection(a, b, c, d)

## Parameters

### **a**

#### Type

```typescript
number
```

#### Description

A floating-point number that specifies the (0, 0) element of the transformation matrix.

### **b**

#### Type

```typescript
number
```

#### Description

A floating-point number that specifies the (0, 1) element of the transformation matrix.

### **c**

#### Type

```typescript
number
```

#### Description

A floating-point number that specifies the (1, 0) element of the transformation matrix.

### **d**

#### Type

```typescript
number
```

#### Description

A floating-point number that specifies the (1, 1) element of the transformation matrix.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Performs a general transformation on the current selection by applying the matrix specified in the arguments. For more information, see the [Element.matrix](../Element_object/Element10.md) property.

## Example

The following example stretches the selection by a factor of 2 in the x direction:

```javascript
fl.getDocumentDOM().transformSelection(2.0, 0.0, 0.0, 1.0);
```
