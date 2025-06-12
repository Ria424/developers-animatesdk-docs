# Document.getTimeline()

## Availability

Flash MX 2004.

## Usage

Document.getTimeline()

## Parameters

None.

## Returns

The current [Timeline object](../Timeline_object/Timeline_summary.md) object.

### Type

```typescript
Timeline
```

## Description

Method; Retrieves the current [Timeline object](../Timeline_object/Timeline_summary.md) in the document. The current timeline can be the current scene, the current symbol being edited, or the current screen.

## Example

The following example gets the Timeline object and returns the number of frames in the longest layer:

```javascript
var longestLayer = fl.getDocumentDOM().getTimeline().frameCount;
fl.trace("The longest layer has" + longestLayer + "frames");
```

The following example enters edit-in-place mode for the selected symbol on the Stage and inserts a frame on the symbol’s timeline.

```javascript
fl.getDocumentDOM().enterEditMode("inPlace");
fl.getDocumentDOM().getTimeline().insertFrames();
```

The following example gets the Timeline object and displays its name:

```javascript
var timeline = fl.getDocumentDOM().getTimeline();
alert(timeline.name);
```

## See also

- [Document.currentTimeline](../Document_object/Document39.md)
- [Document.timelines](../Document_object/Document5995.md)
- [SymbolItem.timeline](../SymbolItem_object/SymbolItem12.md)
