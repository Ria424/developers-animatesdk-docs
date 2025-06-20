# Flash.closeAll()

## Availability

Flash MX 2004.

## Usage

fl.closeAll([bPromptToSave])

## Parameters

### **bPromptToSave**

#### Type

```typescript
boolean?
```

#### Description

An optional Boolean value that specifies whether to display the Save dialog box for any files that have been changed since they were previously saved, or the Save As dialog box for files that have never been saved. The default value is true.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; closes all open files (FLA files, SWF files, JSFL files, and so on). If you want to close all open files without saving changes to any of them, pass false for *bPromptToSave*. This method does not terminate the application.

## Example

The following code closes all open files, prompting the user to save any new or changed files.

```javascript
fl.closeAll();
```

## See also

[Flash.closeAllPlayerDocuments()](../Flash_object/Flash8.md), [Flash.closeDocument()](../Flash_object/Flash9.md)
