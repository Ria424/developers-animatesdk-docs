# Layer.getRigParentAtFrame()

## Availability

Adobe Animate 2020.

## Usage

Layer.getRigParentAtFrame(frameIndex)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

An integer that specifies absolute frame index.

## Returns

Layer object

### Type

```typescript
Layer
```

## Description

Method; It will return the layer parent of the given frame.

## Example

The following example gets the layer parent from the first frame of the ninth layer:

```javascript
var myparent = an.getDocumentDOM().getTimeline().layers[8].getRigParentAtFrame(0);
```
