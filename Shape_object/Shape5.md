# Shape.getCubicSegmentPoints()

## Availability

Flash CS4 Professional.

## Usage

*shape.getCubicSegmentPoints(cubicSegmentIndex)*

## Parameters

### **cubicSegmentIndex**

#### Type

```typescript
number
```

#### Description

An integer that specifies the cubic segment for which points are returned.

## Returns

An array of points that define a cubic curve for the Edge object that corresponds to the specified *cubicSegmentIndex*
(see [Edge.cubicSegmentIndex](../Edge_object/Edge.md)).

### Type

```typescript
Point[]
```

## Description

Method; returns an array of points that define a cubic curve.

## Example

The following example displays the *x* and *y* values for each point on the cubic curve of the first edge of the selection:

```javascript
var elem = fl.getDocumentDOM().selection[0];
var index = elem.edges[0].cubicSegmentIndex;
var cubicPoints = elem.getCubicSegmentPoints(index);
for (var i = 0; i < cubicPoints.length; i++) {
    fl.trace("index " + i + " x: " + cubicPoints[i].x + " y: " + cubicPoints[i].y);
}
```
