# Camera.setZoom()

## Availability

Adobe Animate 2019

## Usage

setZoom(frameIndex, zoomVal)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

integer

### **zoomVal**

#### Type

```typescript
number
```

#### Description

integer

## Returns

Nothing.

## Description

Zooms camera to absolute value given by input parameter in percentage.

## Example

The following example zooms camera to absolute value given by input parameter in percentage.

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.setZoom(37, -100);
```
