## Tools summary

#### Availability

Flash MX 2004.

#### Description

The Tools object is accessible from the flash object ([Flash.tools](../Flash_object_/Flash76.md)). The [Tools.toolObjs](../Tools_object/Tools11.md) property contains an array of ToolObj objects, and the [Tools.activeTool](../Tools_object/Tools.md) property returns the ToolObj object for the currently active tool. (See also [ToolObj object](../ToolObj_object/ToolObj_summary.md) and the list of Extensible tools in ["Top-Level Functions and Methods"](../Top-Level_Functions_and_Methods/Top.md).)

***Note:** The following methods and properties are used only when creating extensible tools.*

#### Method summary

The following methods are available for the Tools object:

| **Method** | **Description** |
| --- | --- |
| [Tools.constrainPoint()](../Tools_object/Tools2.md) | Takes two points and returns a new adjusted or *constrained* point. |
| [Tools.getKeyDown()](../Tools_object/Tools4.md) | Returns the most recently pressed key. |
| [Tools.setCursor()](../Tools_object/Tools8.md) | Sets the pointer to a specified appearance. |
| [Tools.snapPoint()](../Tools_object/Tools10.md) | Takes a point as input and returns a new point that may be adjusted or *snapped* to the nearest geometric object. |

#### Property summary

The following properties are available for the Tools object:

| **Property** | **Description** |
| --- | --- |
| [Tools.activeTool](../Tools_object/Tools.md) | Read-only; returns the [ToolObj object](../ToolObj_object/ToolObj_summary.md) for the currently active tool. |
| [Tools.altIsDown](../Tools_object/Tools1.md) | Read-only; a Boolean value that identifies if the Alt key is being pressed. |
| [Tools.ctlIsDown](../Tools_object/Tools3.md) | Read-only; a Boolean value that identifies if the Control key is being pressed. |
| [Tools.mouseIsDown](../Tools_object/Tools5.md) | Read-only; a Boolean value that identifies if the left mouse button is currently pressed. |
| [Tools.penDownLoc](../Tools_object/Tools6.md) | Read-only; a point that represents the position of the last mouse-down event on the Stage. |
| [Tools.penLoc](../Tools_object/Tools7.md) | Read-only; a point that represents the current location of the mouse. |
| [Tools.shiftIsDown](../Tools_object/Tools9.md) | Read-only; a Boolean value that identifies if the Shift key is being pressed. |
| [Tools.toolObjs](../Tools_object/Tools11.md) | Read-only; an array of ToolObj objects. |
