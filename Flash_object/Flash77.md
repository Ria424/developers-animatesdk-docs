# Flash.trace()

## Availability

Flash MX 2004.

## Usage

trace(message)

## Parameters

### **message**

#### Type

```typescript
string
```

#### Description

A string that appears in the Output panel.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Sends a text string to the Output panel, terminated by a new line, and displays the Output panel if it is not already visible. This method is identical to [OutputPanel.trace()](../OutputPanel_object/OutputPanel2.md) and works in the same way as the trace() statement in ActionScript.
To send a blank line, use fl.trace("") or fl.trace("\\n"). You can use the latter command inline, making \\n a part of the *message* string.

## Example

The following example displays several lines of text in the Output panel:

```javascript
fl.outputPanel.clear();
fl.trace("Hello World!!!");
var myPet = "cat";
fl.trace("\nI have a " + myPet);
fl.trace("");
fl.trace("I love my " + myPet);
fl.trace("Do you have a " + myPet + "?");
```
