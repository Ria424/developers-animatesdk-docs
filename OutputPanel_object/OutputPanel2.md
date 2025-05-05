# OutputPanel.trace()

## Availability

Flash MX 2004.

## Usage

OutputPanel.trace(message)

## Parameters

**message** `string`; A string that contains the text to add to the Output panel.

## Returns

Nothing.

## Description

Method; Sends a text string to the Output panel, terminated by a new line, and displays the Output panel if it is not already visible. This method is identical to [Flash.trace()](../Flash_object/Flash77.md), and works in the same way as the trace() statement in ActionScript.
To send a blank line, use outputPanel.trace("") or outputPanel.trace("\n"). You can use the latter command inline, making \n a part of the *message* string.

## Example

The following example displays several lines of text in the Output panel:

```javascript
fl.outputPanel.clear();
fl.outputPanel.trace("Hello World!!!");
var myPet = "cat";
fl.outputPanel.trace("\nI have a " + myPet + "\n");
fl.outputPanel.trace("I love my " + myPet);
fl.outputPanel.trace("Do you have a " + myPet + "?");
```
