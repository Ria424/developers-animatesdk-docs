# FontItem.embedRanges

## Availability

Flash CS5 Professional.

## Description

Property; `string`; Specifies a series of delimited integers that correspond to items that can be selected in the Font Embedding dialog box.
This property can also be read, allowing you to find out what characters were specified with the Font Embedding dialog box for a given Font item.
***Note:** The range numbers correspond to the FontEmbedding/UnicodeTables.xml file found in the configuration folder.*

## Example

Assuming that the first item in the Library is a Font item, the following code embeds the ranges identified by the
integers 1, 3, and 7.

```javascript
fl.getDocumentDOM().library.items[0].embedRanges = "1|3|7";
```

Assuming that the first item in the Library is a Font item, the following code resets the ranges to embed.

```javascript
fl.getDocumentDOM().library.items[0].embedRanges = "";
```
