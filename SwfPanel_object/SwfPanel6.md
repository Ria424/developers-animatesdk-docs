# SwfPanel.setFocus()

## Availability

Flash CS5.5 Professional.

## Usage

swfPanel.setFocus()

## Returns

### Type

```typescript
void
```

## Description

Method; Sets the keyboard focus to the specified SWF panel.

## Example

The following code sets the focus to the SWF panel named "Project":

Please do the followings steps before running this command:

1. Undock the Project panel, so it is a floating panel.

2. Open the Create File dialog box from the Project panel and then click the Stage.

3. Press the Tab key a few times to ensure the Project panel does not have focus.

4. Run the script below from the Commands menu (put a JSFL file containing the code below in the user/config/Commands directory):

5. Press the tab key. You should see an insertion cursor in one of the text fields in the Create File dialog box.

```javascript
fl.getSwfPanel("Project").setFocus();
```

## See also

- [SwfPanel.name](../SwfPanel_object/SwfPanel3.md)
- [Flash.swfPanels](../Flash_object/Flash74.md)
