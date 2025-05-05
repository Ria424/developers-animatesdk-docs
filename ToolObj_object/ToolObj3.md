# ToolObj.position

## Availability

Flash MX 2004.

## Usage

ToolObj.position

## Description

Read-only property; `integer`; The position of the tool in the Tools panel. This property is used only when you create extensible tools.

## Example

The following commands in the mouseDown() method of a tool's JavaScript file will show that tool's position in the Tools panel as an integer in the Output panel:

```javascript
myToolPos = fl.tools.activeTool.position;
fl.trace(myToolPos);
```
