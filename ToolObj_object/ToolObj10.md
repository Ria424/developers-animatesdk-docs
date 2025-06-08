# ToolObj.showPIControl()

## Availability

Flash MX 2004.

## Usage

ToolObj.showPIControl(control, bShow)

## Parameters

### **control**

#### Type

```typescript
string
```

#### Description

The name of the control to show or hide. This method is used only when you create extensible tools. Valid values depend on the Property inspector invoked by this tool (see [ToolObj.setPI()](../ToolObj_object/ToolObj7.md)).

A shape Property inspector has the following controls:

- Stroke
- fill

A text Property inspector has the following controls:

| type | font | pointsize |
| --- | --- | --- |
| color | bold | italic |
| direction | alignLeft | alignCenter |
| alignRight | alignJustify | spacing |
| position | autoKern | small |
| rotation | format | lineType |
| selectable | html | border |
| deviceFonts | varEdit | options |
| link | maxChars | target |

The movie Property inspector has the following controls:

| size | publish | background |
| --- | --- | --- |
| framerate | player | profile |

### **bShow**

#### Type

```typescript
boolean
```

#### Description

A boolean value that determines whether to show or hide the specified control (true shows the control; false

hides the control).

## Returns

Nothing.

## Description

Method; Shows or hides a control in the Property inspector. This method is used only when you create extensible tools.

## Example

The following command in an extensible tool’s JavaScript file will set Flash to not show the fill options in the Property inspector for that tool:

```javascript
fl.tools.activeTool.showPIControl("fill", false);
```
