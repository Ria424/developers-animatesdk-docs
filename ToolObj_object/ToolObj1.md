# ToolObj.enablePIControl()

## Availability

Flash MX 2004.

## Usage

ToolObj.enablePIControl(control, bEnable)

## Parameters

### **control**

#### Type

```typescript
string
```

#### Description

The name of the control to enable or disable. Legal values depend on the Property inspector invoked by this tool; see [ToolObj.setPI()](../ToolObj_object/ToolObj7.md).

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

A movie Property inspector has the following controls:

| size | publish | background |
| --- | --- | --- |
| framerate | player | profile |

### **bEnable**

#### Type

```typescript
boolean
```

#### Description

A boolean value that determines whether to enable (true) or disable (false) the control.

## Returns

Nothing.

## Description

Method; Enables or disables the specified control in a Property inspector. Used only when creating extensible tools.

## Example

The following command in an extensible tool's JavaScript file sets Flash to not show the stroke options in the Property inspector for that tool:

```javascript
theTool.enablePIControl("stroke", false);
```
