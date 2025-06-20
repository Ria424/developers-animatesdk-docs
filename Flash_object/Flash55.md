# Flash.quit()

## Availability

Flash MX 2004.

## Usage

fl.quit([bPromptIfNeeded])

## Parameters

### **bPromptIfNeeded**

#### Type

```typescript
boolean?
```

#### Description

A boolean value that is true (default) if you want the user to be prompted to save any modified documents. Set this parameter to false if you do not want the user to be prompted to save modified documents. In

the latter case, any modifications in open documents will be discarded and the application will exit immediately. Although it is useful for batch processing, use this method with caution. This parameter is optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Quits Flash, prompting the user to save any changed documents.

## Example

The following example illustrates quitting with and without asking to save modified documents:

```javascript
// Quit with prompt to save any modified documents.
fl.quit();
fl.quit(true); // True is optional.
// Quit without saving any files.
fl.quit(false);
```
