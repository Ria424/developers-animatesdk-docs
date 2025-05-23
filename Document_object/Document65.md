# Document.exportPublishProfile()

## Availability

Flash MX 2004.

## Usage

Document.exportPublishProfile(fileURI)

## Parameters

**fileURI** A string, expressed as a file:/// URI, that specifies the path of the XML file to which the profile is exported.

## Returns

Nothing.

## Description

Method; Exports the currently active profile to an XML file.

## Example

The following example exports the currently active profile to the file named profile.xml in the
folder /Documents and Settings/username/Desktop on the C drive:

```javascript
fl.getDocumentDOM().exportPublishProfile("file:///C\|/Documents and Settings/username/Desktop/profile.xml");
```

## See also

- [Document.exportPublishProfileString()](../Document_object/Document66.md)
- [Document.importPublishProfile()](../Document_object/Document94.md)
