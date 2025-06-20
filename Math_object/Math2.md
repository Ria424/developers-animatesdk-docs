# Math.pointDistance()

## Availability

Flash MX 2004.

## Usage

Math.pointDistance(pt1, pt2)

## Parameters

### **pt1**

#### Type

```typescript
Point
```

#### Description

The point at which the distance is measured.

### **pt2**

#### Type

```typescript
Point
```

#### Description

The point at which the distance is measured.

## Returns

A floating-point value that represents the distance between the points.

### Type

```typescript
number
```

## Description

Method; Computes the distance between two points.

## Example

The following example stores the value for the distance between **`pt1`** and **`pt2`** in the dist variable:

```javascript
var pt1 = {x: 10, y: 20}
var pt2 = {x: 100, y: 200}
var dist = fl.Math.pointDistance(pt1, pt2);
```
