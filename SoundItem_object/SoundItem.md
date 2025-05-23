# SoundItem.bitRate

## Availability

Flash MX 2004.

## Description

Property; a string that specifies the bit rate of a sound in the library. This property is available only for the MP3 compression type. Acceptable values are *"8 kbps", "16 kbps", "20 kbps", "24 kbps", "32 kbps", "48 kbps", "56 kbps", "64 kbps", "80 kbps", "112 kbps", "128 kbps",* and *"160 kbps"*. Stereo sounds exported at 8 Kbps or 16 Kbps are converted to mono. The property is undefined for other compression types.

If you want to specify a value for this property, set [SoundItem.useImportedMP3Quality](../SoundItem_object/SoundItem13.md) to false.

## Example

The following example displays the bitRate value in the Output panel if the specified item in the library has the MP3 compression type:

```javascript
alert(fl.getDocumentDOM().library.items[0].bitRate);
```

## See also

[SoundItem.compressionType](../SoundItem_object/SoundItem2.md), [SoundItem.convertStereoToMono](../SoundItem_object/SoundItem3.md)
