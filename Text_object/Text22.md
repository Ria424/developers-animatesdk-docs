# Text.setTextAttr()

## Availability

Flash MX 2004.

## Usage

text.setTextAttr(attrName, attrValue [, startIndex [, endIndex]])

## Parameters

### **attrName**

#### Type

```typescript
string
```

#### Description

A string that specifies the name of the TextAttrs object property to change.

### **attrValue**

#### Type

```typescript
any
```

#### Description

The value for the TextAttrs object property.

For a list of possible values for **`attrName`** and **`attrValue`**, see the Property summary for the [TextAttrs object](../TextAttrs_object/TextAttrs_summary.md).

### **startIndex**

#### Type

```typescript
number?
```

#### Description

An integer that is the index (zero-based) of the first character in the array. This parameter is optional.

### **endIndex**

#### Type

```typescript
number?
```

#### Description

An integer that specifies the index of the end point in the selected text string, which starts at **`startIndex`** and goes up to, but does not include, **`endIndex`**. This parameter is optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; sets the attribute specified by the **`attrName`** parameter associated with the text identified by **`startIndex`** and **`endIndex`** to the value specified by **`attrValue`**. This method can be used to change attributes of text that might span TextRun elements (see [TextRun object](../TextRun_object/TextRun_summary.md)), or that are portions of existing TextRun elements. Using it may change the position and number of TextRun elements within this object’s text.textRuns array (see [Text.textRuns](../Text_object/Text27.md)).

If you omit the optional parameters, the method uses the entire Text object’s character range. If you specify only **`startIndex`**, the range is a single character at that position. If you specify both **`startIndex`** and **`endIndex`**, the range starts from **`startIndex`** and goes up to, but does not include, the character located at **`endIndex`**.

## Example

The following example sets the selected text field to italic:

```javascript
fl.getDocumentDOM().selection[0].setTextAttr("italic", true);
```

The following example sets the size of the third character to 10:

```javascript
fl.getDocumentDOM().selection[0].setTextAttr("size", 10, 2);
```

The following example sets the color to red for the third through the eighth character of the selected text:

```javascript
fl.getDocumentDOM().selection[0].setTextAttr("fillColor", 0xff0000, 2, 8);
```
