# Document.setElementTextAttr()

## Availability

Flash MX 2004.

## Usage

Document.setElementTextAttr(attrName, attrValue [, startIndex [, endIndex]])

## Parameters

### **attrName**

#### Type

```typescript
string
```

#### Description

The name of the TextAttrs property to change.

### **attrValue**

#### Type

```typescript
any
```

#### Description

The value to which to set the TextAttrs property. For a list of property names and expected values, see the Property summary table for the [TextAttrs object](../TextAttrs_object/TextAttrs_summary.md).

### **startIndex**

#### Type

```typescript
number?
```

#### Description

The index of the first character that is affected. This parameter is optional.

### **endIndex**

#### Type

```typescript
number?
```

#### Description

The index of the last character that is affected. This parameter is optional.

## Returns

A boolean value: true if at least one text attribute property is changed; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; Sets the specified textAttrs property of the selected text items to the specified value. For a list of property names and allowable values, see the Property summary table for the [TextAttrs object](../TextAttrs_object/TextAttrs_summary.md). If the optional parameters are not passed, the method sets the style of the currently selected text range, or the whole text field if no text is selected. If only *startIndex* is passed, the method sets that character’s attributes. If *startIndex* and *endIndex* are passed, the method sets the attributes on the characters starting from *startIndex* up to, but not including, *endIndex*. If paragraph styles are specified, all the paragraphs that fall within the range are affected.

## Example

The following examples set the fillColor, italic, and bold text attributes for the selected text items:

```javascript
var doc = fl.getDocumentDOM();
var success = doc.setElementTextAttr("fillColor", "#00ff00");
var pass = doc.setElementTextAttr("italic", true, 10);
var ok = doc.setElementTextAttr("bold", true, 5, 15);
```
