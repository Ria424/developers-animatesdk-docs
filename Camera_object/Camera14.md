# Camera.resetTint()

## Availability

Adobe Animate 2019.

## Usage

Camera.resetTint(frameIndex)

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

Remove camera tint.

## Example

The following example Remove camera tint.

```javascript
var tl = an.getDocumentDOM().getTimeline();
tl.camera.resetTint(0); // reset camera tint at first frame in timeline
```
