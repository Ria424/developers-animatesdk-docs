# activate()

## Availability

Flash MX 2004.

## Usage

```javascript
function activate() {
    // statements
}
```

## Parameters

None.

## Returns

Nothing.

## Description

Function; Called when the extensible tool becomes active (that is, when the tool is selected in the Tools panel). Use this function to perform any initialization tasks the tool requires.

## Example

The following example sets the value of [Tools.activeTool](../Tools_object/Tools.md) when the extensible tool is selected in the Tools panel:

```javascript
function activate() {
    var theTool = fl.tools.activeTool;
}
```

## See also

[Tools.activeTool](../Tools_object/Tools.md)
