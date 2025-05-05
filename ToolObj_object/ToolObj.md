# ToolObj.depth

## Availability

Flash MX 2004.

## Usage

ToolObj.depth

## Description

Read-only property; `integer`; An integer that specifies the depth of the tool in the pop-up menu in the Tools panel. This property is used only when creating extensible tools.

## Example

The following example specifies that the tool has a depth of 1, which means one level under a tool in the Tools panel:

```javascript
fl.tools.activeTool.depth = 1;
```
