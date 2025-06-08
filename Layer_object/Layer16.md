# Layer.setBlendModeAtFrame()

## Availability

Animate 2020.

## Usage

layer.setBlendModeAtFrame(frameIndex,blendModeString)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

Specifies absolute frame index.

### **blendModeString**

#### Type

```typescript
string
```

#### Description

Specifies the blendmode to be set.

## Returns

Nothing.

## Description

Method; Sets the blending mode at the particular frame.

## Example

The following example sets the blending mode of the frame number 5.

```javascript
an.getDocumentDOM().getTimeline().layers[0].setBlendModeAtFrame(4, "Subtract");
```
