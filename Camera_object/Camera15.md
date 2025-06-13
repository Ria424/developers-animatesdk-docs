# Camera.resetColorFilter()

## Availability

Adobe Animate 2019.

## Usage

Camera.resetColorFilter(frameIndex)

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

### Type

```typescript
void
```

## Description

Remove color filter.

## Example

The following example removes color filter.

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.resetColorFilter(0);
```
