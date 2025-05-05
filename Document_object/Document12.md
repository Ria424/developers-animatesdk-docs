# Document.addNewText()

## Availability

Flash MX 2004; optional *text* parameter added in Flash CS3 Professional.

## Usage

Document.addNewText(boundingRectangle [, text ])

## Parameters

**boundingRectangle** `Rectangle`; Specifies the size and location of the text field. For information on the format of *boundingRectangle*, see [Document.addNewRectangle()](../Document_object/Document10.md).

**text** `string?`; An optional string that specifies the text to place in the field. If you omit this parameter, the selection in the Tools panel switches to the Text tool. Therefore, if you don’t want the selected tool to change, pass a value for *text*.

## Returns

Nothing.

## Description

Method; Inserts a new text field and optionally places text into the field. If you omit the *text* parameter, you can call
[Document.setTextString()](../Document_object/Document9908.md) to populate the text field.

## Example

The following example creates a new text field in the upper left corner of the Stage and sets the text string to "Hello World":

```javascript
fl.getDocumentDOM().addNewText({left: 0, top: 0, right: 100, bottom: 100}, "Hello World!");
fl.getDocumentDOM().setTextString("Hello World!");
```

## See also

[Document.setTextString()](../Document_object/Document9908.md)
