# Timeline.name

## Availability

Flash MX 2004.

## Description

Property; `string`; The name of the current timeline. This name is the name of the current scene, screen (slide or form), or symbol that is being edited.

## Example

The following example retrieves the first scene name:

```javascript
var sceneName = fl.getDocumentDOM().timelines[0].name;
```

The following example sets the first scene name to FirstScene:

```javascript
fl.getDocumentDOM().timelines[0].name = "FirstScene";
```
