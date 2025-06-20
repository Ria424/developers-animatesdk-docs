# Flash.showIdleMessage()

## Availability

Flash 8.

## Usage

fl.showIdleMessage(show)

## Parameters

### **show**

#### Type

```typescript
boolean
```

#### Description

A boolean value specifying whether to enable or disable the warning about a script running too long.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Lets you disable the warning about a script running too long (pass false for *show*). You might want to do this when processing batch operations that take a long time to complete. To re-enable the alert, issue the command again, this time passing true for *show*.

## Example

The following example illustrates how to disable and re-enable the warning about a script running too long:

```javascript
fl.showIdleMessage(false);
var result = timeConsumingFunction();
fl.showIdleMessage(true);
var result = timeConsumingFunction();
```
