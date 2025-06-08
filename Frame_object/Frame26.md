# Frame.setMotionObjectXML()

## Availability

Flash Professional CS5.

## Usage

Frame.setMotionObjectXML(xmlstr [, endAtCurrentLocation])

## Parameters

### **xmlstr**

#### Type

```typescript
string
```

#### Description

Specifies the XML string.

### **endAtCurrentLocation**

#### Type

```typescript
boolean
```

#### Description

Determines whether the tween starts or ends at the current position.

## Description

Method; Applies the specified motion XML to the selected motion object.

## Example

This example specifies that the motion XML identified as myMotionXML be applied to the selected motion object.

```javascript
var doc = fl.getDocumentDOM();
var my_tl = doc.getTimeline();
getCurrentFrame = function() {
    var layer = my_tl.layers[my_tl.currentLayer];
    var frame = layer.frames[my_tl.currentFrame];
    return frame;
}
var theFrame = getCurrentFrame();
theFrame.setMotionObjectXML(myMotionXML.toString(), false);
```
