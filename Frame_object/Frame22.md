# Frame.name

## Availability

Flash MX 2004.

## Description

Property; `string`; A string that specifies the name of the frame.

## Example

The following example sets the name of the first frame, top layer to "First Frame" and then stores the name value in the frameLabel variable:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].frames[0].name = "First Frame";
var frameLabel = fl.getDocumentDOM().getTimeline().layers[0].frames[0].name;
```
