## Document.getSWFPathFromProfile()

#### Availability

Flash Professional CS6.

#### Usage

Document.getSWFPathFromProfile()

#### Parameters

None.

#### Returns

`string`; The full path to the SWF file that is set in the current Publish profile.

#### Description

Method; Gets the path to the SWF file that is set in the current Publish profile.

#### Example

The following example displays the full path to the SWF file as defined in the Publish profile:

```javascript
fl.trace("the current Publish Setting's SWF file path is: " + fl.getDocumentDOM().getSWFPathFromProfile());
```
