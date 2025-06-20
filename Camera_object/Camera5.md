# Camera.getColorFilter()

## Availability

Adobe Animate 2019.

## Usage

getColorFilter(frameIndex)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

integer

## Returns

### Type

```typescript
{brightness: number, contrast: number, saturation: number, hue: number}
```

## Description

Gets camera color filter.

## Example

The following example gets camera color filter.

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.cameraEnabled = true;
timeline.camera.colorFilterEnabled = true;

var filterVal = timeline.camera.getColorFilter(0);
fl.trace("Brightness: " + filterVal.brightness + " Contrast: " + filterVal.contrast + " Saturation: " + filterVal.saturation + " Hue: " + filterVal.hue);
```
