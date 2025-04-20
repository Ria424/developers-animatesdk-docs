## Frame.soundLibraryItem

#### Availability

Flash MX 2004.

#### Usage

Frame.soundLibraryItem

#### Description

Property; `SoundItem`; A library item (see [SoundItem object](../SoundItem_object/SoundItem_summary.md)) used to create a sound. The sound is attached directly to the frame.

#### Example

The following example assigns the first item in the library to the soundLibraryItem property of the first frame:

```javascript
// The first item in the library must be a sound object. 
fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundLibraryItem = fl.getDocumentDOM().library.items[0];
```
