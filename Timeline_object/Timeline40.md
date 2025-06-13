# Timeline.reorderLayer()

## Availability

Flash MX 2004.

## Usage

Timeline.reorderLayer(layerToMove, layerToPutItBy \[, bAddBefore\])

## Parameters

### **layerToMove**

#### Type

```typescript
number
```

#### Description

A zero-based index that specifies which layer to move.

### **layerToPutItBy**

#### Type

```typescript
number
```

#### Description

A zero-based integer index indicating the layer to position the moved layer next to.

### **bAddBefore**

#### Type

```typescript
boolean?
```

#### Description

Optional. If true (default), moves the layer before **`layerToPutItBy`**; if false, moves it after.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Moves the first specified layer before or after the second specified layer.

## Example

The following example moves the layer at index 2 to the top (on top of the layer at index 0):

```javascript
fl.getDocumentDOM().getTimeline().reorderLayer(2, 0);
```

The following example places the layer at index 3 after the layer at index 5:

```javascript
fl.getDocumentDOM().getTimeline().reorderLayer(3, 5, false);
```
