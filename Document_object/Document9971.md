# Document.silent

## Availability

Flash MX 2004.

## Usage

Document.silent

## Description

Property; `boolean`; Specifies whether the object is accessible. This is equivalent to the inverse logic of the Make Movie Accessible setting in the Accessibility panel. That is, if `Document.silent` is true, it is the same as the Make Movie Accessible option being unchecked. If it is false, it is the same as the Make Movie Accessible option being checked.

## Example

The following example sets the isSilent variable to the value of the silent property:

```javascript
var isSilent = fl.getDocumentDOM().silent;
```

The following example sets the silent property to false, indicating that the document is accessible:

```javascript
fl.getDocumentDOM().silent = false;
```
