# Path.addPoint()

## Availability

Flash MX 2004.

## Usage

path.addPoint(x, y)

## Parameters

### **x**

#### Type

```typescript
number
```

#### Description

A floating-point number that specifies the *x* position of the point.

### **y**

#### Type

```typescript
number
```

#### Description

A floating-point number that specifies the *y* position of the point.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; adds a point to the path.

## Example

The following example creates a new path, stores it in the myPath variable, and assigns the new point to the path:

```javascript
var myPath = fl.drawingLayer.newPath();
myPath.addPoint(10, 100);
```
