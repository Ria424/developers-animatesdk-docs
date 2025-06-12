# Layer.getRigMatrixAtFrame()

## Availability

Adobe Animate 2020.

## Usage

Layer.getRigMatrixAtFrame(frameIndex)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

It is an integer that specifies absolute frame index.

## Returns

Matrix object

### Type

```typescript
Matrix
```

## Description

Method; It will return the rig matrix of the particular frame.

## Example

The following example gets the rig matrix from the first frame of the ninth layer:

```javascript
var matrix = an.getDocumentDOM().getTimeline().layers[8].getRigMatrixAtFrame(0);
```
