# Document.forceSimple

## Availability

Flash MX 2004.

## Description

Property; `boolean`; Specifies whether the children of the specified object are accessible. This is equivalent to the inverse logic of the Make Child Objects Accessible setting in the Accessibility panel. That is, if forceSimple is true, it is the same as the Make Child Object Accessible option being unchecked. If forceSimple is false, it is the same as the Make Child Object Accessible option being checked.

## Example

The following example sets the areChildrenAccessible variable to the value of the forceSimple property. A value of false means the children are accessible.

```javascript
var areChildrenAccessible = fl.getDocumentDOM().forceSimple;
```

The following example sets the forceSimple property to allow the children of the document to be accessible:

```javascript
fl.getDocumentDOM().forceSimple = false;
```
