## Frame.labelType

#### Availability

Flash MX 2004.

#### Usage

Frame.labelType

#### Description

Property; `"none" | "name" | "comment" | "anchor"`; A string that specifies the type of Frame name. Acceptable values are "none", "name", "comment", and
"anchor". Setting a label to "none" clears the [Frame.name](../Frame_object/Frame22.md) property.

#### Example

The following example sets the name of the first frame in the top layer to "First Frame" and then sets its label to "comment":

```javascript
var frame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
frame.name = "First Frame";
frame.labelType = "comment";
```
