## Contour.getHalfEdge()

#### Availability

Flash MX 2004.

#### Usage

Contour.getHalfEdge()

#### Parameters

None.

#### Returns

`HalfEdge`; A [HalfEdge object](../HalfEdge_object/HalfEdge_summary.md).

#### Description

Method; Returns a [HalfEdge object](../HalfEdge_object/HalfEdge_summary.md) on the contour of the selection.

#### Example

This example traverses all the contours of the selected shape and shows the coordinates of the vertices in the Output panel:

```javascript
var elt = fl.getDocumentDOM().selection[0];
elt.beginEdit();

var contourArray = elt.contours;
var contourCount = 0;
for (var i = 0; i < contourArray.length; i++) {
    var contour = contourArray[i];
    contourCount++;
    var he = contour.getHalfEdge();
    var iStart = he.id;
    var id = 0;

    while (id != iStart) {
        // Get the next vertex.
        var vrt = he.getVertex();
        var x = vrt.x;
        var y = vrt.y;
        fl.trace("vrt: " + x + ", " + y);
        he = he.getNext();
        id = he.id;
    }
}

elt.endEdit();
```
