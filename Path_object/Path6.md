# Path.newContour()

## Availability

Flash MX 2004.

## Usage

path.newContour()

## Parameters

None.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; starts a new contour in the path.

## Example

The following example creates a hollow square:

```javascript
var myPath = fl.drawingLayer.newPath();
myPath.addPoint(0, 0);
myPath.addPoint(0, 30);
myPath.addPoint(30, 30);
myPath.addPoint(30, 0);
myPath.addPoint(0, 0);

myPath.newContour();
myPath.addPoint(10, 10);
myPath.addPoint(10, 20);
myPath.addPoint(20, 20);
myPath.addPoint(20, 10);
myPath.addPoint(10, 10);

myPath.makeShape();
```
