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

Specifies absolute frame index.

### **filterArray**

#### Type

```typescript
Filter[]
```

#### Description

The array of filters to be set.

## Returns

Nothing.

## Description

Method; Apply filters at a particular frame.

## Example

The following example copies the filter applied at the first frame and sets it to the tenth frame:

```javascript
var myFilters = an.getDocumentDOM().getTimeline().layers[0].getFiltersAtFrame(0);
an. getDocumentDOM().getTimeline().layers[0].setFiltersAtFrame(9, myFilters);
```
