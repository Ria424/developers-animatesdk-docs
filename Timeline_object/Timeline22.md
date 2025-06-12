# Timeline.getFrameProperty()

## Availability

Flash MX 2004.

## Usage

Timeline.getFrameProperty(property \[, startframeIndex \[, endFrameIndex\]\])

## Parameters

### **property**

#### Type

```typescript
string
```

#### Description

The name of the property for which to get the value. See the Property summary for the [Frame object](../Frame_object/Frame_summary.md) for a complete list of properties.

### **startFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index specifying the starting frame for which to get the property value. If omitted, the current selection is used. This parameter is optional.

### **endFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index specifying the end frame (exclusive) of the range. If omitted, it defaults to the value of **`startFrameIndex`**. Optional.

## Returns

A value for the specified property, or undefined if all the selected frames do not have the same property value.

### Type

```typescript
any | undefined
```

## Description

Method; retrieves the specified property’s value for the selected frames.

## Example

The following example retrieves the name of the first frame in the current document’s top layer and displays the name in the Output panel:

```javascript
fl.getDocumentDOM().getTimeline().currentLayer = 0;
fl.getDocumentDOM().getTimeline().setSelectedFrames(0, 0, true);
var frameName = fl.getDocumentDOM().getTimeline().getFrameProperty("name");
fl.trace(frameName);
```
