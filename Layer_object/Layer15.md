# Layer.getFiltersAtFrame()

## Availability

Animate 2020.

## Usage

layer.getFiltersAtFrame(frameIndex)  

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

Absolute zero-based frame index.

## Returns

An array that contains a list of filters applied to the frame at frameIndex

### Type

```typescript
Filter[]
```

## Description

Method; An array that contains a list of filters applied to the frame at frameIndex.

## Example

The following example gets the filters at the first frame of the first layer:

```javascript
var filters = an.getDocumentDOM().getTimeline().layers[0].getFiltersAtFrame(0);
```
