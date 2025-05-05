# ToolObj summary

## Availability

Flash MX 2004.

## Description

A ToolObj object represents an individual tool in the Tools panel. To access a ToolObj object, use properties of the [Tools object](../Tools_object/Tools_summary.md): either the [Tools.toolObjs](../Tools_object/Tools11.md) array or [Tools.activeTool](../Tools_object/Tools.md).

## Method summary

The following methods are available for the ToolObj object.

***Note:** The following methods are used only when creating extensible tools.*

| **Method** | **Description** |
| --- | --- |
| [ToolObj.enablePIControl()](../ToolObj_object/ToolObj1.md) | Enables or disables the specified control in a Property inspector. Used only when creating extensible tools. |
| [ToolObj.setIcon()](../ToolObj_object/ToolObj4.md) | Identifies a PNG file to use as a tool icon in the Flash Tools panel. |
| [ToolObj.setMenuString()](../ToolObj_object/ToolObj5.md) | Sets the string that appears in the pop-up menu as the name for the tool. |
| [ToolObj.setOptionsFile()](../ToolObj_object/ToolObj6.md) | Associates an XML file with the tool. |
| [ToolObj.setPI()](../ToolObj_object/ToolObj7.md) | Sets a particular Property inspector to be used when the tool is activated. |
| [ToolObj.setToolName()](../ToolObj_object/ToolObj8.md) | Assigns a name to the tool for the configuration of the Tools panel. |
| [ToolObj.setToolTip()](../ToolObj_object/ToolObj9.md) | Sets the tooltip that appears when the mouse is held over the tool icon. |
| [ToolObj.showPIControl()](../ToolObj_object/ToolObj10.md) | Shows or hides a control in the Property inspector. |
| [ToolObj.showTransformHandles()](../ToolObj_object/ToolObj11.md) | Called in the [ConfigureTool()](../Top-level_functions_and_methods/configureTool.md) method of an extensible tool’s JavaScript file to indicate that the free transform handles should appear when the tool is active. |

## Property summary

The following properties are available for the ToolObj object:

| **Property** | **Description** |
| --- | --- |
| [ToolObj.depth](../ToolObj_object/ToolObj.md) | An integer that specifies the depth of the tool in the pop-up menu in the Tools panel. |
| [ToolObj.iconID](../ToolObj_object/ToolObj2.md) | An integer that specifies the resource ID of the tool. |
| [ToolObj.position](../ToolObj_object/ToolObj3.md) | Read-only; an integer specifying the position of the tool in the Tools panel. |
