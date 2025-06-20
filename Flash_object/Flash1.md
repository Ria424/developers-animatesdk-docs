# Flash.addEventListener()

## Availability

Flash CS3 Professional. The prePublish, postPublish, selectionChanged, and dpiChanged events are new in Adobe Animate.

## Usage

fl.addEventListener(eventType, callbackFunction)

## Parameters

### **eventType**

#### Type

```typescript
"documentNew" | "documentOpened" | "documentClosed" | "mouseMove" | "documentChanged" | "layerChanged" | "timelineChanged" | "frameChanged" | "prePublish" | "postPublish" | "selectionChanged" | "dpiChanged"
```

#### Description

A string that specifies the event type to pass to this callback function. Acceptable values are "documentNew", "documentOpened", "documentClosed", "mouseMove", "documentChanged", "layerChanged", "timelineChanged", "frameChanged", "prePublish", "postPublish", "selectionChanged", and "dpiChanged".

The documentChanged value doesn’t mean that the content of a document has changed; it means that a different document is now in the foreground. That is, `fl.getDocumentDOM()` will return a different value than it did before this event occurred.

### **callbackFunction**

#### Type

```typescript
string
```

#### Description

The name of the function you want to execute every time the event occurs.

## Returns

An integer that identifies the event listener. Use this identifier when calling `fl.removeEventListener()`.

### Type

```typescript
integer
```

## Description

Method; registers a function to be called when a specific event occurs. Note that you can define multiple listeners for the same event.

When using this method, be aware that if the event occurs frequently (as might be the case with mouseMove) and the function takes a long time to run, your application might hang or otherwise enter an error state. Additionally, the prePublish and postPublish events should have minimal code and execute quickly.

## Example

The following example displays a message in the Output panel when a document is closed:

```javascript
myFunction = function () {
    fl.trace("document was closed");
}
var eventID = fl.addEventListener("documentClosed", myFunction);
```

## See also

[Flash.removeEventListener()](../Flash_object/Flash58.md)
