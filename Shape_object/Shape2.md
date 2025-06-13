# Shape.deleteEdge()

## Availability

Flash MX 2004.

## Usage

Shape.deleteEdge(index)

## Parameters

### **index**

#### Type

```typescript
number
```

#### Description

A zero-based index that specifies the edge to delete from the [Shape.edges](../Shape_object/Shape3.md) array. This method changes the length of the shape.edges array.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; deletes the specified edge. You must call [Shape.beginEdit()](../Shape_object/Shape.md) before using this method.

## Example

The following example takes the currently selected shape and removes the first edge in the edge array:

```javascript
var shape = fl.getDocumentDOM().selection[0];
shape.beginEdit();
shape.deleteEdge(0);
shape.endEdit();
```
