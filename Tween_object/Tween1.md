# Tween.getFilters()

## Availability

Flash Pro CC.

## Usage

Tween.getFilters(frameIndex);

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

(integer) Index of the frame from which filter data is to be retrieved.

## Returns

Array of Filter objects.

### Type

```typescript
Filter[]
```

## Description

Method; Returns filters data of a selected frame from a tween span.

## Example

```javascript
var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
for (var i = 0; i < tweenObj.duration; i++) {
    var filterList = tweenObj.getFilters(i);
    for (var j = 0; j < filterList.length; j++) {
        var filter = filterList[j];
        fl.trace(filter.name);
        fl.trace("Blur x = " + filter.blurX + " y = " + filter.blurY);
    }
}
```
