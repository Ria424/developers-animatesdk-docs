# Document.setTextString()

## Availability

Flash MX 2004.

## Usage

Document.setTextString(text [, startIndex [, endIndex]])

## Parameters

### **text**

#### Type

```typescript
string
```

#### Description

A string of the characters to insert in the text field.

### **startIndex**

#### Type

```typescript
number?
```

#### Description

An optional integer that specifies the first character to replace. The first character position is 0 (zero).

### **endIndex**

#### Type

```typescript
number?
```

#### Description

An integer that specifies the last character to replace.

## Returns

A boolean value: true if the text of at least one text string is set; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; Inserts a string of text. If the optional parameters are not passed, the existing text selection is replaced; if the Text object isn’t currently being edited, the whole text string is replaced. If only *startIndex* is passed, the string passed is inserted at this position. If *startIndex* and *endIndex* are passed, the string passed replaces the segment of text starting from *startIndex* up to, but not including, *endIndex*.

## Example

The following example replaces the current text selection with "Hello World":

```javascript
var success = fl.getDocumentDOM().setTextString("Hello World!");
```

The following example inserts "hello" at position 6 of the current text selection:

```javascript
var pass = fl.getDocumentDOM().setTextString("hello", 6);
```

The following example inserts "Howdy" starting at position 2 and up to, but not including, position 7 of the current text selection:

```javascript
var ok = fl.getDocumentDOM().setTextString("Howdy", 2, 7);
```

## See also

[Document.getTextString()](../Document_object/Document87.md)
