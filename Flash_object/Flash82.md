# Flash.addToolInToolbar() 

## Availability

Animate 2020

## Usage

fl.addToolInToolbar(toolName)

## Parameters

**toolName** A string that specifies the name of the tool to select. Refer [Flash.selectTool](../Flash_object/Flash68.md) description for the acceptable *toolName* values.

## Returns

`boolean`; Returns true if the specified tool was added successfully in the Tools Panel.

## Description

Method; Appends the specified tool in the Tools Panel from Toolbar Palette if it is not already present.
If you or a user creates custom tools, the names of those tools can also be passed as the *toolName* parameter.

## Example

The following example selects the Oval tool.

```javascript
var success = fl.addToolInToolbar("oval");
```
