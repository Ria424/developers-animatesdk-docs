## Document.publishProfiles

#### Availability

Flash MX 2004.

#### Usage

document.publishProfiles

#### Description

Read-only property; `string[]`; an array of the publish profile names for the document.

#### Example

The following example displays the names of the publish profiles for the document:

```javascript
var myPubProfiles = fl.getDocumentDOM().publishProfiles;
for (var i = 0; i < myPubProfiles.length; i++) {
    fl.trace(myPubProfiles[i]);
}
```
