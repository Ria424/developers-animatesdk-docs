## Document.loadCuepointXML() - dropped

#### Availability

Flash Professional CS5. Dropped in Adobe Animate.

#### Usage

Document.loadCuepointXML(URI)

#### Parameters

**URI** `string`; The absolute path to the cue point XML file.

#### Description

Method; Loads a cue point XML file. The format and DTD of the XML file is the same as the one imported and exported by the Cue Points Property inspector. The return value is the same as the string serialized in the Cue Point property of the object containing the instance of an FLVPlayback Component.

#### Example

The following example the cue points XML file located at C:\\testCuePoints.xml:

```javascript
var cuePoints = fl.getDocumentDOM().loadCuepointXML("c:\\testCuePoints.xml");
```
