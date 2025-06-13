# Camera.setTint()

## Availability

Adobe Animate 2019.

## Usage

setTint(frameIndex, amount, red, green, blue)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

integer

### **amount**

#### Type

```typescript
number
```

#### Description

integer

### **red**

#### Type

```typescript
number
```

#### Description

integer

### **green**

#### Type

```typescript
number
```

#### Description

integer

### **blue**

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

Set camera tint using tint color(RGB) & tint percent (percentage of tint).

## Example

The following example sets camera tint using tint color(RGB) & tint percent (percentage of tint).

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.cameraEnabled = true;
timeline.camera.tintEnabled = true;

timeline.camera.setTint(0, 100, 255, 255, 255);
```
