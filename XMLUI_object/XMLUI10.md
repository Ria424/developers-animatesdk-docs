# XMLUI.setVisible()

## Availability

Flash 8.

## Usage

XMLUI.setVisible(controlID, visible)

## Parameters

### **controlID**

#### Type

```typescript
string
```

#### Description

Specifies the ID attribute of the control you want to show or hide.

### **visible**

#### Type

```typescript
boolean
```

#### Description

*true* if you want to show the control; *false* if you want to hide it.

## Returns

Nothing.

## Description

Method; Shows or hides a control.

## Example

The following example hides the control with the ID attribute myControl:

```javascript
fl.xmlui.setVisible("myControl", false);
```

## See also

[XMLUI.getVisible()](../XMLUI_object/XMLUI5.md)
