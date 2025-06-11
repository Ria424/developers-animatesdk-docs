# Text.getTextAttr()

## Availability

Flash MX 2004.

## Usage

text.getTextAttr(attrName [, startIndex [, endIndex]])

## Parameters

### **attrName**

#### Type

```typescript
string
```

#### Description

A string that specifies the name of the TextAttrs object property to be returned. For a list of possible values for *attrName*, see the Property summary for the [TextAttrs object](../TextAttrs_object/TextAttrs_summary.md).

### **startIndex**

#### Type

```typescript
number?
```

#### Description

An integer that is the index of first character. This parameter is optional.

### **endIndex**

#### Type

```typescript
number?
```

#### Description

An integer that specifies the end of the range of text, which starts with **`startIndex`** and goes up to, but does not include, **`endIndex`**. This parameter is optional.

## Returns

The value of the attribute specified in the **`attrName`** parameter.

## Description

Method; retrieves the attribute specified by the **`attrName`** parameter for the text identified by the optional **`startIndex`** and **`endIndex`** parameters. If the attribute is not consistent for the specified range, Flash returns undefined. If you omit the optional parameters **`startIndex`** and **`endIndex`**, the method uses the entire text range. If you specify only **`startIndex`**, the range used is a single character at that position. If you specify both **`startIndex`** and **`endIndex`**, the range starts from **`startIndex`** and goes up to, but does not include, **`endIndex`**.

## Example

The following example gets the font size of the currently selected text field and shows it:

```javascript
var textSize = fl.getDocumentDOM().selection[0].getTextAttr("size");
fl.trace(textSize);
```

The following example gets the text fill color of the selected text field:

```javascript
var fill = fl.getDocumentDOM().selection[0].getTextAttr("fillColor");
fl.trace(fill);
```

The following example gets the size of the third character:

```javascript
var char3 = fl.getDocumentDOM().selection[0].getTextAttr("size", 2);
fl.trace(char3);
```

The following example gets the color of the selected text field from the third through the eighth character:

```javascript
fl.getDocumentDOM().selection[0].getTextAttr("fillColor", 2, 8);
```
