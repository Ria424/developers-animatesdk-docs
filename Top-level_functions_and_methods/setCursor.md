## setCursor()

#### Availability

Flash MX 2004.

#### Usage

```javascript
function setCursor() {
    // statements
}
```

#### Parameters

None.

#### Returns

Nothing.

#### Description

Function; Called when the extensible tool is active and the mouse moves, to allow the script to set custom pointers. The script should call tools.setCursor() to specify the pointer to use. For a list that shows which pointers correspond to which integer values, see [Tools.setCursor()](../Tools_object/Tools8.md).

#### Example

```javascript
function setCursor() {
    fl.tools.setCursor(1);
}
```
