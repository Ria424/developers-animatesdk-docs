# SpriteSheetExporter.overflowed

## Availability

Flash Pro CS6.

## Description

Read-only property; A boolean value indicating whether all the exported symbol frames cannot fit within the currently specified size of the sprite sheet.

## Example

```javascript
var exporter = new SpriteSheetExporter;
if (exporter.overflowed)
    exporter.sheetWidth = 1024;
```
