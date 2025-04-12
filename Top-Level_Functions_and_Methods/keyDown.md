## keyDown()

#### Availability

Flash MX 2004.

#### Usage

function keyDown() {
// statements
}

#### Parameters

None.

#### Returns

Nothing.

#### Description

Function; called when the extensible tool is active and the user presses a key. The script should call
[Tools.getKeyDown()](../Tools_object/Tools4.md) to determine which key was pressed.

#### Example

The following example displays information about which key was pressed when the extensible tool is active and the user presses a key.

```javascript
function keyDown() {
    fl.trace("key " + fl.tools.getKeyDown() + " was pressed");
}
```

#### See also

[keyUp()](../Top-Level_Functions_and_Methods/keyUp.md), [Tools.getKeyDown()](../Tools_object/Tools4.md)
