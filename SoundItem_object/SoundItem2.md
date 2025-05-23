# SoundItem.compressionType

## Availability

Flash MX 2004.

## Description

Property; a string that specifies that compression type for a sound in the library. Acceptable values are *"Default", "ADPCM", "MP3", "Raw",* and *"Speech"*.
If you want to specify a value for this property, set [SoundItem.useImportedMP3Quality](../SoundItem_object/SoundItem13.md) to false.

## Example

The following example changes an item in the library to compression type Raw:

```javascript
fl.getDocumentDOM().library.items[0].compressionType = "Raw";
```

The following example changes the compression type of the selected library items to Speech:

```javascript
fl.getDocumentDOM().library.getSelectedItems().compressionType = "Speech";
```

## See also

[SoundItem.originalCompressionType](../SoundItem_object/SoundItem7.md)
