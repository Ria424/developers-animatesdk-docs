# Layer.setRigParentAtFrame()

## Availability

Adobe Animate 2020.

## Usage

Layer.setRigParentAtFrame(frameIndex, layer)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

An integer that specifies absolute frame index.

### **layer**

#### Type

```typescript
Layer
```

#### Description

The layer object to be set as parent.

## Returns

Nothing.

## Description

Method; It will set the layer parent of the particular frame.

## Example

The following example gets the layer parent of the first frame and sets the same to the tenth frame of the first layer:

```javascript
var myParent = an.getDocumentDOM().getTimeline().layers[0].getRigParentAtFrame(0);
an.getDocumentDOM().getTimeline().layers[0].setRigParentAtFrame(9, myParent);
```
