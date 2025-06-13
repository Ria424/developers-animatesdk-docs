# Timeline.setSelectedLayers()

## Availability

Flash MX 2004.

## Usage

Timeline.setSelectedLayers(index [, bReplaceCurrentSelection])

## Parameters

### **index**

#### Type

```typescript
number
```

#### Description

A zero-based integer index for the layer to select.

### **bReplaceCurrentSelection**

#### Type

```typescript
boolean?
```

#### Description

A boolean value that, if it is set to true, causes the method to replace the current selection; false causes the method to extend the current selection. The default value is true. This parameter is optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Sets the layer to be selected, and also makes the specified layer the current layer. Selecting a layer also means that all the frames in the layer are selected.

## Example

The following example selects the top layer:

```javascript
fl.getDocumentDOM().getTimeline().setSelectedLayers(0);
```

The following example adds the next layer to the selection:

```javascript
fl.getDocumentDOM().getTimeline().setSelectedLayers(1, false);
```

## See also

[Timeline.getSelectedLayers()](../Timeline_object/Timeline26.md)
