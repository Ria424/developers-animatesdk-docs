# Flash.removeEventListener()

## Availability

Flash CS3 Professional. The id parameter is new in CS4.

## Usage

fl.removeEventListener(eventType, id)

## Parameters

### **eventType**

#### Type

```typescript
"documentNew"
| "documentOpened"
| "documentClosed"
| "mouseMove"
| "documentChanged"
| "layerChanged"
| "timelineChanged"
| "frameChanged"
```

#### Description

A string that specifies the event type to remove from this callback function. Acceptable values are "documentNew", "documentOpened", "documentClosed", "mouseMove", "documentChanged", "layerChanged", "timelineChanged", and "frameChanged".

### **id**

#### Type

```typescript
number
```

#### Description

An integer that specifies the listener ID returned from the corresponding fl.addEventListener() call.

## Returns

A boolean value of true if the event listener was successfully removed; false if the function was never added to the list with the `fl.addEventListener()` method.

### Type

```typescript
boolean
```

## Description

Unregisters a function that was registered using [Flash.addEventListener()](../Flash_object/Flash1.md).

## Example

The following example removes the event listener associated with the documentClosed event:

```javascript
fl.removeEventListener("documentClosed", eventID);
```

## See also

[Flash.addEventListener()](../Flash_object/Flash1.md)
