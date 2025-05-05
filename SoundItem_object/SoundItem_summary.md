# SoundItem summary

**Inheritance** [Item object](../Item_object/Item_summary.md) > SoundItem object

## Availability

Flash MX 2004.

## Description

The SoundItem object is a subclass of the [Item object](../Item_object/Item_summary.md). It represents a library item used to create a sound (see also [Frame.soundLibraryItem](../Frame_object/Frame31.md)).

## Method summary

In addition to the Item object methods, the SoundItem object has the following method:

| **Method** | **Description** |
| --- | --- |
| [SoundItem.exportToFile()](../SoundItem_object/SoundItem4.md) | Exports the specified item to an MP3 or WAV file (Macintosh and Windows). |

## Property summary

In addition to the Item object properties, the following properties are available for the SoundItem object:

| **Property** | **Description** |
| --- | --- |
| [SoundItem.bitRate](../SoundItem_object/SoundItem.md) | A string that specifies the bit rate of a sound in the library. Available only for the MP3 compression type. |
| [SoundItem.bits](../SoundItem_object/SoundItem1.md) | A string that specifies the bits value for a sound in the library that has ADPCM compression. |
| [SoundItem.compressionType](../SoundItem_object/SoundItem2.md) | A string that specifies the compression type for a sound in the library. |
| [SoundItem.convertStereoToMono](../SoundItem_object/SoundItem3.md) | A Boolean value available only for MP3 and Raw compression types. |
| [SoundItem.fileLastModifiedDate](../SoundItem_object/SoundItem5.md) | Read-only; a string containing a hexadecimal number that represents the number of seconds that have elapsed between January 1, 1970, and the modification date of the original file (on disk) at the time the file was imported to the library. |
| [SoundItem.lastModifiedDate](../SoundItem_object/SoundItem6.md) | Read-only; the modification date of the sound item in the Library. |
| [SoundItem.originalCompressionType](../SoundItem_object/SoundItem7.md) | Read-only; a string that specifies whether the specified item was imported as an MP3 file. |
| [SoundItem.quality](../SoundItem_object/SoundItem8.md) | A string that specifies the playback quality of a sound in the library. Available only for the MP3 compression type. |
| [SoundItem.sampleRate](../SoundItem_object/SoundItem9.md) | A string that specifies the sample rate for the audio clip. |
| [SoundItem.sourceFileExists](../SoundItem_object/SoundItem10.md) | Read-only; a Boolean value that specifies whether the file that was imported to the Library still exists in the location from where it was imported. |
| [SoundItem.sourceFileIsCurrent](../SoundItem_object/SoundItem11.md) | Read-only; a Boolean value that specifies whether the file modification date of the Library item is the same as the modification date on disk of the file that was imported. |
| [SoundItem.sourceFilePath](../SoundItem_object/SoundItem12.md) | Read-only; a string, expressed as a file:/// URI, that represents the path and name of the file that was imported into the Library. |
| [SoundItem.useImportedMP3Quality](../SoundItem_object/SoundItem13.md) | A Boolean value; if true, all other properties are ignored, and the imported MP3 quality is used. |
