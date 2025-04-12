## SoundItem.bits

#### Availability

Flash MX 2004.

#### Usage

*soundItem.bits*

#### Description

Property; a string that specifies the bits value for a sound in the library that has ADPCM compression. Acceptable values are *"2 bit", "3 bit", "4 bit", and "5 bit"*.
If you want to specify a value for this property, set [SoundItem.useImportedMP3Quality](../SoundItem_object/SoundItem13.md) to false.

#### Example

The following example displays the bits value in the Output panel if the currently selected item in the library has the ADPCM compression type:

```javascript
alert(fl.getDocumentDOM().library.items[0].bits);
```

#### See also

[SoundItem.compressionType](../SoundItem_object/SoundItem2.md)
