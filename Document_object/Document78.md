# Document.getElementTextAttr()

## Availability

Flash MX 2004.

## Usage

Document.getElementTextAttr(attrName [, startIndex [, endIndex]])

## Parameters

### **attrName**

#### Type

```typescript
string
```

#### Description

Specifies the name of the TextAttrs property to be returned. For a list of property names and expected values, see the Property summary table for the [TextAttrs object](../TextAttrs_object/TextAttrs_summary.md).

### **startIndex**

#### Type

```typescript
number?
```

#### Description

Specifies the index of first character, with 0 (zero) specifying the first position. This parameter is optional.

### **endIndex**

#### Type

```typescript
number?
```

#### Description

Specifies the index of last character. This parameter is optional.

## Returns

If one text field is selected, the property is returned if there is only one value used within the text. Returns undefined if there are several values used inside the text field. If several text fields are selected, and all the text alignment values are equal, the method returns this value. If several text fields are selected, but all the text alignment values are not equal, the method returns undefined. If the optional arguments are not passed, these rules apply to the range of text currently selected or the whole text field if the text is not currently being edited. If only *startIndex* is passed, the property of the character to the right of the index is returned, if all the selected Text objects match values. If *startIndex* and *endIndex* are passed, the value returned reflects the entire range of characters from *startIndex* up to, but not including, *endIndex*.

## Description

Method; Gets a specific TextAttrs property of the selected Text objects. Selected objects that are not text fields are ignored. For a list of property names and expected values, see the Property summary table for the [TextAttrs object](../TextAttrs_object/TextAttrs_summary.md). See also [Document.setElementTextAttr()](../Document_object/Document500.md).

## Example

The following example gets the size of the selected text fields:

```javascript
fl.getDocumentDOM().getElementTextAttr("size");
```

The following example gets the color of the character at index 3 in the selected text fields:

```javascript
fl.getDocumentDOM().getElementTextAttr("fillColor", 3);
```

The following example gets the font name of the text from index 2 up to, but not including, index 10 of the selected text fields:

```javascript
fl.getDocumentDOM().getElementTextAttr("face", 2, 10);
```
