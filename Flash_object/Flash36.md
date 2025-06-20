# Flash.installedPlayers

## Availability

Flash CS5.5 Professional.

## Parameters

None.

## Returns

An array of generic objects corresponding to the list of installed Flash Players in the document PI.

### Type

```typescript
{name: string; version: string; minASVersion: number; maxASVersion: number; stageWidth: number; stageHeight: number}[]
```

## Description

Read-only property; The array of generic objects corresponding to the list of installed Flash Players in the document PI. Each object in the array contains the following properties:

**name** The string name of the document.

**version** Can be used to set the current player for a document, using the Document.setPlayerVersion() function.

**minASVersion** The minimum ActionScript version required by the document. An integer between the minASVersion and the maxASVersion (inclusive) can be used to set the ActionScript version of the document, using the Document.asVersion property.

**maxASVersion** The maximum ActionScript version supported by the document.

**stageWidth** The default Stage width in pixels for the given target. For example, for iPhone the default size is 320 x 480 pixels. For Android, the default size is 480 x 800.

**stageHeight** The default Stage height in pixels for the given target. For example, for iPhone the default size is 320 x 480 pixels. For Android, the default size is 480 x 800.

## Example

The following example traces the properties of all objects in the installedPlayers array to the output window:

```javascript
var arr = fl.installedPlayers;
for (var i in arr) {
    fl.trace(
        "name: " + arr[i].name
        + " version: " + arr[i].version
        + "minASVersion: " + arr[i].minASVersion
        + "maxASVersion: " + arr[i].maxASVersion
        + " stageWidth:" + arr[i].stageWidth
        + " stageHeight: " + arr[i].stageHeight + " "
    );
}
```
