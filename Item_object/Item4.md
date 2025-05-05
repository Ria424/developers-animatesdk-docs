# Item.itemType

## Availability

Flash MX 2004.

## Usage

Item.itemType

## Description

Read-only property; `"undefined" | "component" | "movie clip" | "graphic" | "button" | "folder" | "font" | "sound" | "bitmap" | "compiled clip" | "screen" | "video"`; The type of element. The value is one of the following: "undefined", "component", "movie clip", "graphic", "button", "folder", "font", "sound", "bitmap", "compiled clip", "screen", or "video". If this property is "video", you can determine the type of video; see [VideoItem.videoType](../VideoItem_object/VideoItem6.md).

## Example

The following example shows the type of the specified library item in the Output panel:

```javascript
fl.trace(fl.getDocumentDOM().library.items[0].itemType);
```
