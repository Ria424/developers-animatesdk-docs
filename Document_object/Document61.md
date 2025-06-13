# Document.exitEditMode()

## Availability

Flash MX 2004.

## Usage

document.exitEditMode()

## Parameters

None.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Exits from symbol-editing mode and returns focus to the next level up from the editing mode. For example, if you are editing a symbol inside another symbol, this method takes you up a level from the symbol you are editing, into the parent symbol.

## Example

The following example exits symbol-editing mode:

```javascript
fl.getDocumentDOM().exitEditMode();
```

## See also

[Document.enterEditMode()](../Document_object/Document60.md)
