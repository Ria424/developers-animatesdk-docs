## Frame.soundSync

#### Availability

Flash MX 2004.

#### Usage

Frame.soundSync

#### Description

Property; `"event" | "stop" | "start" | "stream"`; The sync behavior of a sound that is attached directly to a frame ([Frame.soundLibraryItem](../Frame_object/Frame31.md)). Acceptable values are *"event", "stop", "start", and "stream"*.

#### Example

The following example specifies that a sound should stream:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundSync = "stream";
```
