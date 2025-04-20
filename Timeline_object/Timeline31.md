## Timeline.layers

#### Availability

Flash MX 2004.

#### Usage

Timeline.layers

#### Description

Read-only property; `Layer[]`; An array of layer objects.

#### Example

The following example uses the currentLayers variable to store the array of layer objects in the current document:

```javascript
var currentLayers = fl.getDocumentDOM().getTimeline().layers;
```
