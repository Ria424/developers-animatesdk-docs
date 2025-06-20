# Frame.getSoundEnvelope()

## Availability

Flash Professional CC.

## Usage

Frame.getSoundEnvelope()

## Parameters

None.

## Returns

Returns SoundEnvelope object.

### Type

```typescript
{mark: number; leftChannel: number; rightChannel: number;}[]
```

## Description

Method; Gets the sound envelope data of any frame.

## Example

The following example illustrates the use of getSoundEnvelope:

```javascript
// Add a sound item to the first Frame

// Get the sound Envelope
var soundEnv = fl.getDocumentDOM().getTimeline().layers[0].frames[0].getSoundEnvelope();

// Assigning the sound 1 in the library to Frame 2
fl.getDocumentDOM().getTimeline().layers[0].frames[1].soundLibraryItem = fl.getDocumentDOM().library.items[1];

// Set the Sound Envelope
fl.getDocumentDOM().getTimeline().layers[0].frames[1].setSoundEnvelope(soundEnv);
```

## See also

[Frame.setSoundEnvelope()](../Frame_object/Frame27.md)
