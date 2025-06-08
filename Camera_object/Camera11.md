# Camera.resetZoom()

## Availability

Adobe Animate 2019.

## Usage

resetZoom(frameIndex)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

integer

## Returns

Nothing.

## Description

Reset camera zoom to it's default zoom value i.e 100%.

## Example

The following example resets camera zoom to it's default zoom value i.e 100%.

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.resetZoom(0);
```
