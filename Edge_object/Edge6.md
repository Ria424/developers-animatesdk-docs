# Edge.splitEdge()

## Availability

Flash MX 2004.

## Usage

Edge.splitEdge(t)

## Parameters

### **t**

#### Type

```typescript
number
```

#### Description

A floating-point value between 0 and 1 that specifies where to split the edge. A value of 0 represents one end point and a value of 1represents the other. For example, passing a value of 0.5 splits the edge in the middle, which, for a line is exactly in the center. If the edge represents a curve, 0.5 represents the parametric middle of the curve.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Splits the edge into two pieces. You must call [Shape.beginEdit()](../Shape_object/Shape.md) before using this method.

## Example

The following example splits the specified edge in half:

```javascript
var shape = fl.getDocumentDOM().selection[0];
shape.beginEdit();
shape.edges[0].splitEdge(0.5);
shape.endEdit();
```
