# Frame.isEmpty()

## Availability

Adobe Animate.

## Usage

Frame.isEmpty()

## Returns

whether the frame contains any elements.

### Type

```typescript
boolean
```

## Description

Method; Lets you know whether the frame contains any elements.

## Example

The following example illustrates use of this method.

```javascript
var frame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
if (frame.isEmpty)
    fl.trace("first frame is empty");
```
