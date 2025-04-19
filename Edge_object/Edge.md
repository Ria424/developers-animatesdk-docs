## Edge.cubicSegmentIndex

#### Availability

Flash CS4 Professional.

#### Usage

Edge.cubicSegmentIndex

#### Description

Read-only property; `integer`; Specifies the index value of a cubic segment of the edge (see [Shape.getCubicSegmentPoints()](../Shape_object/Shape5.md)).

#### Example

The following code displays the index values of all the cubic segments of the specified edge:

```javascript
var theShape = fl.getDocumentDOM().selection[0];
var edgesArray = theShape.edges;
for (var i = 0; i < edgesArray.length; i++) {
    fl.trace(edgesArray[i].cubicSegmentIndex);
}
```
