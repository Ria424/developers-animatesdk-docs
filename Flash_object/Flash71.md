# Flash.setPrefBoolean()

## Availability

Adobe Animate.

## Usage

fl.setPrefBoolean(keySection, keyName, keyValue)

## Parameters

**keySection** A string that contains the preferences section that contains keyName. (usually this is "Settings").

**keyName** A string that contains the name of the boolean preference setting to be set.

**keyValue** A string that contains the value to be set (true ohr false).

## Returns

None.

## Description

Method; sets a boolean preference value.

## Example

The following example calls the fl.setPrefBoolean() method:

```javascript
fl.setPrefBoolean("BridgeTalk", "LogIncoming", true);
```
