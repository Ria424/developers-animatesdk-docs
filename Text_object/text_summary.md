## text summary

**Inheritance** [Element object](../Element_object/element_summary.md) > Text object

#### Availability

Flash MX 2004.

#### Description

The Text object represents a single text item in a document. All properties of the text pertain to the entire text block.

To set properties of a text run within the text field, see the Property summary for the [TextAttrs object](../TextAttrs_object/textAttrs_summary.md). To change properties of a selection within a text field, you can use [document.setElementTextAttr()](../Document_object/docum500.md) and specify a range of text, or use the current selection.

To set generic properties of the selected text field, use [document.setElementProperty()](../Document_object/docum490.md). The following example sets the x value of the selected text field's registration point to 50:

 fl.getDocumentDOM().setElementProperty("x", 50);

#### Method summary

In addition to the Element object methods, the following methods are available for the Text object:

| **Method** | **Description** |
| --- | --- |
| [text.getTextAttr()](../Text_object/text11.md) | Retrieves the specified attribute for the text identified by the optional ***startIndex*** and ***endIndex*** parameters. |
| [text.getTextString()](../Text_object/text12.md) | Retrieves the specified range of text. |
| [text.setTextAttr()](../Text_object/text22.md) | Sets the specified attribute associated with the text identified by ***startIndex*** and ***endIndex***. |
| [text.setTextString()](../Text_object/text23.md) | Changes the text string within this Text object. |

#### Property summary

In addition to the Element object properties, the following properties are available for the Text object:

| **Property** | **Description** |
| --- | --- |
| [text.accName](../Text_object/text.md) | A string that is equivalent to the Name field in the Accessibility panel. |
| [text.antiAliasSharpness](../Text_object/text1.md) | A float value that specifies the anti-aliasing sharpness of the text. |
| [text.antiAliasThickness](../Text_object/text2.md) | A float value that specifies the anti-aliasing thickness of the text. |
| [text.autoExpand](../Text_object/text3.md) | A Boolean value that controls the expansion of the bounding width for static text fields or the bounding width and height for dynamic or input text. |
| [text.border](../Text_object/text4.md) | A Boolean value that controls whether Flash shows (true) or hides (false) a border around dynamic or input text. |
| [text.description](../Text_object/text5.md) | A string that is equivalent to the Description field in the Accessibility panel. |

| **Property** | **Description** |
| --- | --- |
| [text.embeddedCharacters](../Text_object/text6.md) | A string that specifies characters to embed. This is equivalent to entering text in the Character Embedding dialog box. |
| [text.embedRanges](../Text_object/text7.md) | A string that consists of delimited integers that correspond to the items that can be selected in the Character Embedding dialog box. |
| [text.embedVariantGlyphs](../Text_object/text8.md) | A Boolean value that specifies whether to enable the embedding of variant glyphs. |
| [text.filters](../Text_object/text9.md) | An array of filters applied to the text element |
| [text.fontRenderingMode](../Text_object/text10.md) | A string that specifies the rendering mode for the text. |
| [text.length](../Text_object/text13.md) | Read-only; an integer that represents the number of characters in the Text object. |
| [text.lineType](../Text_object/text14.md) | A string that sets the line type to "single line", "multiline", "multiline no wrap", or "password". |
| [text.maxCharacters](../Text_object/text15.md) | An integer that specifies the maximum characters the user can enter into this Text object. |
| [text.orientation](../Text_object/text16.md) | A string that specifies the orientation of the text field. |
| [text.renderAsHTML](../Text_object/text17.md) | A Boolean value that controls whether Flash draws the text as HTML and interprets embedded HTML tags. |
| [text.scrollable](../Text_object/text18.md) | A Boolean value that controls whether the text can (true) or cannot (false) be scrolled. |
| [text.selectable](../Text_object/text19.md) | A Boolean value that controls whether the text can (true) or cannot (false) be selected. Input text is always selectable. |
| [text.selectionEnd](../Text_object/text20.md) | A zero-based integer that specifies the offset of the end of a text subselection. |
| [text.selectionStart](../Text_object/text21.md) | A zero-based integer that specifies the offset of the beginning of a text subselection. |
| [text.shortcut](../Text_object/text24.md) | A string that is equivalent to the Shortcut field in the Accessibility panel. |
| [text.silent](../Text_object/text25.md) | A Boolean value that specifies whether the object is accessible. |
| [text.tabIndex](../Text_object/text26.md) | An integer that is equivalent to the Tab Index field in the Accessibility panel. |
| [text.textRuns](../Text_object/text27.md) | Read-only; an array of TextRun objects. |
| [text.textType](../Text_object/text28.md) | A string that specifies the type of text field. Acceptable values are "static", "dynamic", and "input". |
| [text.useDeviceFonts](../Text_object/text29.md) | A Boolean value. A value of true causes Flash to draw text using device fonts. |
| [text.variableName](../Text_object/text30.md) | A string that contains the contents of the Text object. |
