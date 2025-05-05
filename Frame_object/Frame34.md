# Frame.soundName

## Availability

Flash MX 2004.

## Usage

Frame.soundName

## Description

Property; The name of a sound that is attached directly to a frame ([Frame.soundLibraryItem](../Frame_object/Frame31.md)), as stored in the library.

## Example

The following example changes the soundName property of the first frame to "song1.mp3"; song1.mp3 must exist in the library:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundName = "song1.mp3";
```
