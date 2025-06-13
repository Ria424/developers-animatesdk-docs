# Layer.setFiltersAtFrame()

## Availability

Animate 2020.

## Usage

Layer.setFiltersAtFrame(frameIndex, filterArray)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

Absolute zero-based frame index.

### **filterArray**

#### Type

```typescript
Filter[]
```

#### Description

The array of filters to be set.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Apply filters at a particular frame.

## Example

The following example copies the filter applied at the first frame and sets it to the tenth frame:

```javascript
var layer = an.getDocumentDOM().getTimeline().layers[0]
var filters = layer.getFiltersAtFrame(0);
layer.setFiltersAtFrame(9, filters);
```
