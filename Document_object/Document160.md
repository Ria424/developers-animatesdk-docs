# Document.moveSelectionBy()

## Availability

Flash MX 2004.

## Usage

Document.moveSelectionBy(distanceToMove)

## Parameters

### **distanceToMove**

#### Type

```typescript
Point
```

#### Description

A pair of floating-point values that specify the *x* and *y* coordinate values by which the method moves the selection. For example, passing ({x: 1, y: 2}) specifies a location one pixel to the right and two pixels down from the current location.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Moves selected objects by a specified distance.

***Note:** When the user uses the arrow keys to move the item, the History panel combines all presses of the arrow key as one move step. When the user presses the arrow keys repeatedly, rather than taking multiple steps in the History panel, the method performs one step, and the arguments are updated to reflect the repeated arrow keys.*

For information on making a selection, see [Document.setSelectionRect()](../Document_object/Document9689.md), [Document.mouseClick()](../Document_object/Document130.md), [Document.mouseDblClk()](../Document_object/Document140.md), and the [Element object](../Element_object/Element_summary.md).

## Example

The following example moves the selected item 62 pixels to the right and 84 pixels down:

```javascript
fl.getDocumentDOM().moveSelectionBy({x: 62, y: 84});
```
