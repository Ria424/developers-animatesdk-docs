# Tools.penDownLoc

## Availability

Flash MX 2004.

## Description

Read-only property; `Point`; A point that represents the position of the last mouse-down event on the Stage. The `Tools.penDownLoc` property comprises two properties, *x* and *y*, corresponding to the *x, y* location of the mouse pointer.

## Example

The following example determines the position of the last mouse-down event on the Stage and displays the *x* and *y*
values in the Output panel:

```javascript
var pt1 = fl.tools.penDownLoc;
fl.trace("x, y location of last mouseDown event was " + pt1.x + ", " + pt1.y);
```

## See also

[Tools.penLoc](../Tools_object/Tools7.md)
