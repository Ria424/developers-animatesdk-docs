# Frame.actionScript

## Availability

Flash MX 2004.

## Description

Property; `string`; A string that represents ActionScript code. To insert a new line character, use "\n".

## Example

The following example assigns stop() to first frame top layer action:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].frames[0].actionScript = "stop();";
```
