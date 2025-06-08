# Timeline.setFrameProperty()

## Availability

Flash MX 2004.

## Usage

Timeline.setFrameProperty(property, value \[, startFrameIndex \[, endFrameIndex\]\])

## Parameters

### **property**

#### Type

```typescript
string
```

#### Description

The name of the property to be modified. For a complete list of properties and values, see the Property summary for the [Frame object](../Frame_object/Frame_summary.md).

You can’t use this method to set values for read-only properties such as [Frame.duration](../Frame_object/Frame4.md) and [Frame.elements](../Frame_object/Frame5.md).

### **value**

#### Type

```typescript
any
```

#### Description

Specifies the value to which you want to set the property. To determine the appropriate values and type, see the Property summary for the [Frame object](../Frame_object/Frame_summary.md).

### **startFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index specifying the first frame to modify. If omitted, the current selection is used. Optional.

### **endFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index specifying the frame at which to stop (exclusive). The range includes frames from **`startFrameIndex`** up to, but not including, **`endFrameIndex`**. If omitted, it defaults to **`startFrameIndex`**. Optional.

## Returns

Nothing.

## Description

Method; Sets the property of the Frame object for the selected frames.

## Example

The following example assigns the ActionScript stop() command to the first frame of the top layer in the current document:

```javascript
fl.getDocumentDOM().getTimeline().currentLayer = 0;
fl.getDocumentDOM().getTimeline().setSelectedFrames(0, 0, true);
fl.getDocumentDOM().getTimeline().setFrameProperty("actionScript", "stop();");
```

The following example sets a motion tween from Frame 2 up to, but not including, Frame 5, of the current layer (remember that index values are different from frame number values):

```javascript
var doc = fl.getDocumentDOM();
doc.getTimeline().setFrameProperty("tweenType", "motion", 1, 4);
```
