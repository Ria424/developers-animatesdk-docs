# prompt()

## Availability

Flash MX 2004.

## Usage

prompt(promptMsg, [text])

## Parameters

### **promptMsg**

#### Type

```typescript
string
```

#### Description

A string to display in the Prompt dialog box (limited to 256 characters in Mac OS X).

### **text**

#### Type

```typescript
string?
```

#### Description

An optional string to display as a default value for the text field.

## Returns

`string`; The string the user typed if the user clicks OK; null if the user clicks Cancel.

## Description

Method; Displays a prompt and optional text in a modal Alert dialog box, along with OK and Cancel buttons.

## Example

The following example prompts the user to enter a user name. If the user types a name and clicks OK, the name appears in the Output panel.

```javascript
var userName = prompt("Enter user name", "Type user name here");
fl.trace(userName);
```

## See also

- [alert()](../Top-level_functions_and_methods/alert.md)
- [confirm()](../Top-level_functions_and_methods/confirm.md)
