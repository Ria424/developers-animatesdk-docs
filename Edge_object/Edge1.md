# Edge.getControl()

## Availability

Flash MX 2004.

## Usage

Edge.getControl(i)

## Parameters

### **i**

#### Type

```typescript
0 | 1 | 2
```

#### Description

Specifies which control point of the edge to return. Specify 0 for the first control point, 1 for the middle control point, or 2 for the end control point. If the [Edge.isLine](../Edge_object/Edge4.md) property is true, the middle control point is set to the midpoint of the segment joining the beginning and ending control points.

## Returns

The specified control point.

### Type

```typescript
Point
```

## Description

Method; Gets a point object set to the location of the specified control point of the edge.

## Example

The following example stores the first control point of the specified shape in the pt variable:

```javascript
var shape = fl.getDocumentDOM().selection[0];
var pt = shape.edges[0].getControl(0);
```
