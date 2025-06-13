# Tween.getShape()

## Availability

Flash Pro CC.

## Usage

Tween.getShape(frameIndex)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

Offset (integer) index of the frame from which shape data has to be retrieved.

## Returns

Shape coordinates at the frame offset.

### Type

```typescript
{x: number; y: number; width: number; height: number;}
```

## Description

Method; Returns interpolated shape of a selected frame within a tween-span.

## Example

```javascript
var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
if (tweenObj.tweenType == "shape") {
    for (var i = 0; i < tweenObj.duration; i++) {
        var shape = tweenObj.getShape(i);
        fl.trace(
            "X: " + shape.x +
            " Y: " + shape.x +
            " Width: " + shape.width +
            " Height: " + shape.height
        );
    }
}
```
