# Document.currentPublishProfile

## Availability

Flash MX 2004.

## Description

Property; `string`; Specifies the name of the active publish profile for the specified document.

## Example

The following example adds a new publish profile with the default name and then displays the name of the profile in the Output panel:

```javascript
fl.getDocumentDOM().addNewPublishProfile();
fl.outputPanel.trace(fl.getDocumentDOM().currentPublishProfile);
```

The following example changes the selected publish profile to "Default":

```javascript
fl.getDocumentDOM().currentPublishProfile = "Default";
```
