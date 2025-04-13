## Text summary

**Inheritance** [Element object](../Element_object/Element_summary.md) > Text object

#### Availability

Flash MX 2004.

#### Description

The Text object represents a single text item in a document. All properties of the text pertain to the entire text block.

To set properties of a text run within the text field, see the Property summary for the [TextAttrs object](../TextAttrs_object/TextAttrs_summary.md). To change properties of a selection within a text field, you can use [Document.setElementTextAttr()](../Document_object/Document500.md) and specify a range of text, or use the current selection.

To set generic properties of the selected text field, use [Document.setElementProperty()](../Document_object/Document490.md). The following example sets the x value of the selected text field's registration point to 50:

 fl.getDocumentDOM().setElementProperty("x", 50);

#### Method summary

In addition to the Element object methods, the following methods are available for the Text object:

| **Method** | **Description** |
| --- | --- |
| [Text.getTextAttr()](../Text_object/Text11.md) | Retrieves the specified attribute for the text identified by the optional ***startIndex*** and ***endIndex*** parameters. |
| [Text.getTextString()](../Text_object/Text12.md) | Retrieves the specified range of text. |
| [Text.setTextAttr()](../Text_object/Text22.md) | Sets the specified attribute associated with the text identified by ***startIndex*** and ***endIndex***. |
| [Text.setTextString()](../Text_object/Text23.md) | Changes the text string within this Text object. |

#### Property summary

In addition to the Element object properties, the following properties are available for the Text object:

| **Property** | **Description** |
| --- | --- |
| [Text.accName](../Text_object/Text.md) | A string that is equivalent to the Name field in the Accessibility panel. |
| [Text.antiAliasSharpness](../Text_object/Text1.md) | A float value that specifies the anti-aliasing sharpness of the text. |
| [Text.antiAliasThickness](../Text_object/Text2.md) | A float value that specifies the anti-aliasing thickness of the text. |
| [Text.autoExpand](../Text_object/Text3.md) | A Boolean value that controls the expansion of the bounding width for static text fields or the bounding width and height for dynamic or input text. |
| [Text.border](../Text_object/Text4.md) | A Boolean value that controls whether Flash shows (true) or hides (false) a border around dynamic or input text. |
| [Text.description](../Text_object/Text5.md) | A string that is equivalent to the Description field in the Accessibility panel. |
| [Text.embeddedCharacters](../Text_object/Text6.md) | A string that specifies characters to embed. This is equivalent to entering text in the Character Embedding dialog box. |
| [Text.embedRanges](../Text_object/Text7.md) | A string that consists of delimited integers that correspond to the items that can be selected in the Character Embedding dialog box. |
| [Text.embedVariantGlyphs](../Text_object/Text8.md) | A Boolean value that specifies whether to enable the embedding of variant glyphs. |
| [Text.filters](../Text_object/Text9.md) | An array of filters applied to the text element |
| [Text.fontRenderingMode](../Text_object/Text10.md) | A string that specifies the rendering mode for the text. |
| [Text.length](../Text_object/Text13.md) | Read-only; an integer that represents the number of characters in the Text object. |
| [Text.lineType](../Text_object/Text14.md) | A string that sets the line type to "single line", "multiline", "multiline no wrap", or "password". |
| [Text.maxCharacters](../Text_object/Text15.md) | An integer that specifies the maximum characters the user can enter into this Text object. |
| [Text.orientation](../Text_object/Text16.md) | A string that specifies the orientation of the text field. |
| [Text.renderAsHTML](../Text_object/Text17.md) | A Boolean value that controls whether Flash draws the text as HTML and interprets embedded HTML tags. |
| [Text.scrollable](../Text_object/Text18.md) | A Boolean value that controls whether the text can (true) or cannot (false) be scrolled. |
| [Text.selectable](../Text_object/Text19.md) | A Boolean value that controls whether the text can (true) or cannot (false) be selected. Input text is always selectable. |
| [Text.selectionEnd](../Text_object/Text20.md) | A zero-based integer that specifies the offset of the end of a text subselection. |
| [Text.selectionStart](../Text_object/Text21.md) | A zero-based integer that specifies the offset of the beginning of a text subselection. |
| [Text.shortcut](../Text_object/Text24.md) | A string that is equivalent to the Shortcut field in the Accessibility panel. |
| [Text.silent](../Text_object/Text25.md) | A Boolean value that specifies whether the object is accessible. |
| [Text.tabIndex](../Text_object/Text26.md) | An integer that is equivalent to the Tab Index field in the Accessibility panel. |
| [Text.textRuns](../Text_object/Text27.md) | Read-only; an array of TextRun objects. |
| [Text.textType](../Text_object/Text28.md) | A string that specifies the type of text field. Acceptable values are "static", "dynamic", and "input". |
| [Text.useDeviceFonts](../Text_object/Text29.md) | A Boolean value. A value of true causes Flash to draw text using device fonts. |
| [Text.variableName](../Text_object/Text30.md) | A string that contains the contents of the Text object. |
