# Frame.soundEffect

## Availability

Flash MX 2004.

## Description

Property; `"none" | "left channel" | "right channel" | "fade left to right" | "fade right to left" | "fade in" | "fade out" | "custom"`; A string that specifies effects for a sound that is attached directly to a frame ([Frame.soundLibraryItem](../Frame_object/Frame31.md)). Acceptable values are *"none", "left channel", "right channel", "fade left to right", "fade right to left", "fade in", "fade out",* and *"custom"*.

## Example

The following example specifies that the sound attached to the first frame should fade in:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundEffect = "fade in";
```
