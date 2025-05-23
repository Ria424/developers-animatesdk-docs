# notifySettingsChanged()

## Availability

Flash MX 2004.

## Usage

```javascript
function notifySettingsChanged() {
    // statements
}
```

## Parameters

None.

## Returns

Nothing.

## Description

Function; Called when the extensible tool is active and the user changes its options in the Property inspector. You can use the tools.activeTool property to query the current values of the options (see [Tools.activeTool](../Tools_object/Tools.md)).

## Example

The following example displays a message in the Output panel when the extensible tool is active and the user changes its options in the Property inspector.

```javascript
function notifySettingsChanged() {
    var theTool = fl.tools.activeTool;
    var newValue = theTool.myProp;
}
```
