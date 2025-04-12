## SoundItem.convertStereoToMono

#### Availability

Flash MX 2004.

#### Usage

*soundItem.convertStereoToMono*

#### Description

Property; a Boolean value available only for MP3 and Raw compression types. Setting this value to true converts a stereo sound to mono; false leaves it as stereo. For the MP3 compression type, if *soundItem.bitRate* is less than 20 Kbps, this property is ignored and forced to *true* (see [SoundItem.bitRate](../SoundItem_object/SoundItem.md)).

If you want to specify a value for this property, set [SoundItem.useImportedMP3Quality](../SoundItem_object/SoundItem13.md) to *false*.

#### Example

The following example converts an item in the library to mono only if the item has the MP3 or Raw compression type:

```javascript
fl.getDocumentDOM().library.items[0].convertStereoToMono = true;
```

#### See also

[SoundItem.compressionType](../SoundItem_object/SoundItem2.md)
