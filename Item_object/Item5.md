## Item.linkageBaseClass

#### Availability

Flash CS3 Professional.

#### Usage

Item.linkageBaseClass

#### Description

Property; `string`; Specifies the ActionScript 3.0 class that will be associated with the symbol. The value specified here appears in the Linkage dialog box in the authoring environment, and in other dialog boxes that include the Linkage dialog box controls, such as the Symbol Properties dialog box. (To specify this value for an ActionScript 2.0 class, use [Item.linkageClassName](../Item_object/Item6.md) )
If the base class is the default for the symbol type (for example, "flash.display.MovieClip" for movie clips, "flash.display.SimpleButton" for buttons, and so on), this property is an empty string (""). Similarly, to make an item the default base class, set this value to an empty string.
When you set this value, none of the checks performed by the Linkage dialog box are performed, and no errors are thrown if Animate is unable to set the base class to the specified value. For example, setting this value in the Linkage dialog box forces checks to make sure that the base class can be found in the FLA file’s classpath. It ensures that ActionScript
3.0 is chosen in the Animate tab of the Publish Settings dialog box, and so on. These checks are not performed when you set this property in a script.

#### Example

The following lines of code show a few ways to use this property:

```javascript
// sets the library item base class to "Sprite"
fl.getDocumentDOM().library.items[0].linkageBaseClass = "flash.display.Sprite";
// sets the library item base class to the default for that item type
fl.getDocumentDOM().library.items[0].linkageBaseClass = "";
// finds and displays the library item's base class
fl.trace(fl.getDocumentDOM().library.items[0].linkageBaseClass);
```

#### See also

[Document.docClass](../Document_object/Document52.md)
