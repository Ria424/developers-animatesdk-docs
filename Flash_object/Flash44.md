# Flash.objectDrawingMode

## Availability

Flash 8.

## Description

Property; a Boolean value that specifies whether the object drawing mode is enabled (true) or the merge drawing mode is enabled (false).

## Example

The following example toggles the state of the object drawing mode:

```javascript
var toggleMode = fl.objectDrawingMode;
if (toggleMode) {
    fl.objectDrawingMode = false;
} else {
    fl.objectDrawingMode = true;
}
```
