# Timeline.mergeLayers()

## Availability

Animate 2020.

## Usage

Timeline.mergeLayers(startLayerNum:int, endLayerNum:int).

## Parameters

### **startLayerNum**

#### Type

```typescript
number
```

#### Description

Integer that specifies the starting layer index.

### **endLayerNum**

#### Type

```typescript
number
```

#### Description

Integer that specifies the ending layer index.

## Returns

Layer object of the merged layer.

### Type

```typescript
Layer
```

## Description

Method; Merge the layers within specified range of indexes.

## Example

The following example merge layers from index 0 to 3.

```javascript
fl.getDocumentDOM().getTimeline().mergeLayers(0, 3);
```
