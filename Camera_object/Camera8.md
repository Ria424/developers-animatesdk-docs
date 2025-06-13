# Camera.setRotation()

## Availability

Adobe Animate 2019

## Usage

setRotation(frameIndex, angleDegree)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

Frame Number in timeline.

### **angleDegree**

#### Type

```typescript
number
```

#### Description

(integer) The angleDegree for rotation.

## Returns

nothing

### Type

```typescript
void
```

## Description

Rotate camera by absolute angle given as input parameters.

## Example

The following example rotates camera by absolute angle given as input parameters.

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.setRotation(37, -100);
```
