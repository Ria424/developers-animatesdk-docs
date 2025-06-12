# XMLUI.getVisible()

## Availability

Flash 8.

## Usage

XMLUI.getVisible(controlID)

## Parameters

### **controlID**

#### Type

```typescript
string
```

#### Description

Specifies the ID attribute of the control whose visibility status you want to retrieve.

## Returns

A boolean value of *true* if the control is visible, or *false* if it is invisible (hidden).

### Type

```typescript
boolean
```

## Description

Method; Returns a Boolean value that specifies whether the control is visible or hidden.

## Example

The following example returns a value that indicates whether the control with the ID attribute *myListBox* is visible:

```javascript
var isVisible = fl.xmlui.getVisible("myListBox");
fl.trace(isVisible);
```

## See also

[XMLUI.setVisible()](../XMLUI_object/XMLUI10.md)
