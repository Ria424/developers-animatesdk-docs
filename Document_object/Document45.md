## Document.description

#### Availability

Flash MX 2004.

#### Usage

document.description

#### Description

Property; `string`; a string that is equivalent to the Description field in the Accessibility panel. The description is read by the screen reader.

#### Example

The following example sets the description of the document:

```javascript
fl.getDocumentDOM().description = "This is the main movie";
```

The following example gets the description of the document and displays it in the Output panel:

```javascript
fl.trace(fl.getDocumentDOM().description);
```
