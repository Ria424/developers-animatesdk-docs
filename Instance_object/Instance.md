# Instance.instanceType

## Availability

Flash MX 2004; possible value of "video" added in Flash 8.

## Usage

instance.instanceType

## Description

Read-only property; `"symbol" | "bitmap" | "embedded video" | "linked video" | "video" | "compiled clip"`; A string that represents the type of instance. Possible values are "symbol", "bitmap", "embedded video", "linked video", "video", and "compiled clip".

In Flash MX 2004, the value of instance.instanceType for an item added to the library using library.addNewItem("video") is "embedded\_video".

In Flash 8 and later, the value is "video". See [Library.addNewItem()](../Library_object/Library1.md).

## Example

The following example shows that the instance type of a movie clip is symbol:

```javascript
// Select a movie clip and then run this script.
var type = fl.getDocumentDOM().selection[0].instanceType;
fl.trace("This instance type is " + type);
```
