## Frame.soundLoopMode

#### Availability

Flash MX 2004.

#### Usage

Frame.soundLoopMode

#### Description

Property; `"repeat" | "loop"`; A string that specifies whether a sound that is attached directly to a frame ([Frame.soundLibraryItem](../Frame_object/Frame31.md)) should play a specific number of times or loop indefinitely. Acceptable values are *"repeat"* and *"loop"*. To specify the number of times the sound should play, set a value for [Frame.soundLoop](../Frame_object/Frame32.md).

#### Example

The following example specifies that a sound should play two times:

```javascript
var frame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
frame.soundLoopMode = "repeat"; 
frame.soundLoop = 2;
```
