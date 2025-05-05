# Element summary

## Availability

Flash MX 2004.

## Description

Everything that appears on the Stage is of the type Element. The following code example lets you select an element:

```javascript
var el = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
```

## Method summary

The following methods are available for the Element object:

| **Method** | **Description** |
| --- | --- |
| [Element.getPersistentData()](../Element_object/Element2.md) | Retrieves the value of the data specified by the ***name*** parameter. |
| [Element.getPublishPersistentData()](../Element_object/Element3.md) | *True* if the specified persistent data is enable for the specified format; otherwise *False*. |
| [Element.getTransformationPoint()](../Element_object/Element4.md) | Gets the value of the specified element’s transformation point. |
| [Element.hasPersistentData()](../Element_object/Element5.md) | Determines whether the specified data has been attached to the specified element. |
| [Element.removePersistentData()](../Element_object/Element12.md) | Removes any persistent data with the specified name that has been attached to the object. |
| [Element.setPersistentData()](../Element_object/Element17.md) | Stores data with an element. |
| [Element.setPublishPersistentData()](../Element_object/Element18.md) | Enables or disables publishing of persistent data for a specified format. |
| [Element.setTransformationPoint()](../Element_object/Element19.md) | Sets the position of the element’s transformation point. |

## Property summary

The following properties are available for the Element object:

| **Property** | **Description** |
| --- | --- |
| [Element.depth](../Element_object/Element.md) | Read-only; an integer that has a value greater than 0 for the depth of the object in the view. |
| [Element.elementType](../Element_object/Element1.md) | Read-only; a string that represents the type of the specified element. |
| [Element.height](../Element_object/Element6.md) | A float value that specifies the height of the element in pixels. |
| [Element.layer](../Element_object/Element7.md) | Read-only; represents the [Layer object](../Layer_object/Layer_summary.md) on which the element is located. |
| [Element.left](../Element_object/Element8.md) | Read-only; a float value that represents the left side of the element. |
| [Element.locked](../Element_object/Element9.md) | A Boolean value: true if the element is locked; false otherwise. |
| [Element.matrix](../Element_object/Element10.md) | A [Matrix object](../Matrix_object/Matrix_summary.md). The matrix has properties *a, b, c, d, tx,* and *ty. a, b, c,* and *d* are floating- point values; tx and ty are coordinates. |
| [Element.name](../Element_object/Element11.md) | A string that specifies the name of the element, normally referred to as the Instance name. |
| [Element.rotation](../Element_object/Element13.md) | An integer or float value between -180 and 180 that specifies the object’s clockwise rotation, in degrees. |
| [Element.scaleX](../Element_object/Element14.md) | A float value that specifies the *x* scale value of symbols, drawing objects, and primitive rectangles and ovals. |
| [Element.scaleY](../Element_object/Element15.md) | A float value that specifies the *y* scale value of symbols, drawing objects, and primitive rectangles and ovals. |
| [Element.selected](../Element_object/Element16.md) | A Boolean value that specifies whether the element is selected or not. |
| [Element.skewX](../Element_object/Element20.md) | A float value between -180 and 180 that specifies the *x* skew value of symbols, drawing objects, and primitive rectangles and ovals. |
| [Element.skewY](../Element_object/Element21.md) | A float value between -180 and 180 that specifies the *y* skew value of symbols, drawing objects, and primitive rectangles and ovals. |
| [Element.top](../Element_object/Element22.md) | Read-only; top side of the element. |
| [Element.transformX](../Element_object/Element23.md) | A floating-point number that specifies the *x* value of the selected element’s transformation point, within the coordinate system of the element's parent. |
| [Element.transformY](../Element_object/Element24.md) | A floating-point number that specifies the *y* value of the selected element’s transformation point, within the coordinate system of the element's parent. |
| [Element.width](../Element_object/Element25.md) | A float value that specifies the width of the element in pixels. |
| [Element.x](../Element_object/Element26.md) | A float value that specifies the *x* value of the selected element’s registration point. |
| [Element.y](../Element_object/Element27.md) | A float value that specifies the *y* value of the selected element’s registration point. |
