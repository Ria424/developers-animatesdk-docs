# Flash.swfPanels

## Availability

Flash CS4 Professional.

## Description

Read-only property; `SwfPanel[]`; an array of registered swfPanel objects (see [SwfPanel object](../SwfPanel_object/SwfPanel_summary.md)). A swfPanel object is registered if it has been opened at least once.

A panel’s position in the array represents the order in which it was opened. If the first panel opened is named TraceBitmap and the second panel opened is named AnotherFunction, then fl.swfPanels[0] is the TraceBitmap swfPanel object, fl.swfPanels[1] is the AnotherFunction swfPanel object, and so on.

This property is undefined if none of panels have been opened (this behavior is new in Adobe Animate).

## Example

The following code displays the name and path of any registered Window SWF panels in the Output panel:

```javascript
if (fl.swfPanels.length > 0) {
    for (var x = 0; x < fl.swfPanels.length; x++) {
        fl.trace("Panel: " + fl.swfPanels[x].name + " -- Path: " + fl.swfPanels[x].path);
    }
}
```
