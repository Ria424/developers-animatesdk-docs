# Document.accName

## Availability

Flash MX 2004.

## Usage

Document.accName

## Description

Property; `string`; A string that is equivalent to the Name field in the Accessibility panel. Screen readers identify objects by reading the name aloud.

## Example

The following example sets the accessibility name of the document to "Main Movie":

```javascript
fl.getDocumentDOM().accName = "Main Movie";
```

The following example gets the accessibility name of the document:

```javascript
fl.trace(fl.getDocumentDOM().accName);
```
