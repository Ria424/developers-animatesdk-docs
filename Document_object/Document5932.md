## Document.swfJPEGQuality

#### Availability

Flash Professional CS6.

#### Usage

document.swfJPEGQuality

#### Description

Property; `integer`; an integer, returns the JPEG Quality setting from the current Publish Profile in the document.

#### Example

The following example display the current SWF JPEG quality:

```javascript
fl.trace("current profile's JPEG Quality is: " + fl.getDocumentDOM().swfJPEGQuality);
```
